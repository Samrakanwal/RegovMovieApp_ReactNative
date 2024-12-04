import React, { useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';  
import { logout } from '../../redux/authSlice';  // Import the logout action
import styles from './HomeScreenStyles';
import { fetchTrendingMovies, fetchPopularMovies, fetchRandomMovies, searchMovies } from '../../redux/movieslice';

interface HomeScreenProps {
  navigation: {
    navigate: (screen: string, params?: object) => void;
  };
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  const trendingMovies = useSelector((state: RootState) => state.movies.trendingMovies);
  const popularMovies = useSelector((state: RootState) => state.movies.popularMovies);
  const randomMovies = useSelector((state: RootState) => state.movies.randomMovies);
  const status = useSelector((state: RootState) => state.movies.status);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
    dispatch(fetchPopularMovies());
    dispatch(fetchRandomMovies());
  }, [dispatch]);

  const handleMovieClick = (movieId: string) => {
    navigation.navigate('MovieDetails', { movieId });
  };

  const handleLogout = () => {
    
    dispatch(logout());

    
    navigation.navigate('Login');  
  };

  const handleProfileClick = () => {
   
    navigation.navigate('Profile');  
  };

  const renderMovieItem = (movie: any) => (
    <TouchableOpacity onPress={() => handleMovieClick(movie.id)}>
      <View style={styles.card}>
        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.movieImage} />
        <Text style={styles.movieTitle}>{movie.title}</Text>
      </View>
    </TouchableOpacity>
  );

  if (status === 'loading') {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity onPress={handleProfileClick}> 
          <Image
            source={{
              uri: 'https://mrwallpaper.com/images/thumbnail/cute-brunette-profile-picture-rawnnhmrk168c9zk.webp',
            }}  
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={styles.greeting}>Hi, Samra</Text>

       
        <TouchableOpacity style={styles.bellIcon} onPress={handleLogout}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.freepik.com/512/13136/13136422.png' }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search Movies"
          style={styles.searchInput}
          onChangeText={(text) => dispatch(searchMovies(text))}
        />
      </View>

      <View style={styles.tabs}>
        <Text style={styles.tab}>All</Text>
        <Text style={styles.tabActive}>Trending</Text>
        <Text style={styles.tab}>Top Rated</Text>
        <Text style={styles.tab}>Popular</Text>
      </View>

      <ScrollView>
        {/* Random Movies Section */}
        <Text style={styles.sectionTitle}>Random Movies</Text>
        <FlatList
          data={randomMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => renderMovieItem(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        />

        {/* Trending Movies Section */}
        <Text style={styles.sectionTitle}>Trending Movies</Text>
        <FlatList
          data={trendingMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => renderMovieItem(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        />

        {/* Popular Movies Section */}
        <Text style={styles.sectionTitle}>Popular Movies</Text>
        <FlatList
          data={popularMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => renderMovieItem(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
