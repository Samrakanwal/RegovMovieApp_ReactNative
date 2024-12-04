import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


import styles from './DetailScreenStyles'; 
import { getMovieDetails } from '../../redux/movieslice';
import { RootState } from '../../redux/store';

interface DetailScreenProps {
  route: {
    params: {
      movieId: string;
    };
  };
}

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const { movieId } = route.params;
  const dispatch = useDispatch();

  const { selectedMovie, status } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(getMovieDetails(movieId)); 
  }, [dispatch, movieId]);

  if (status === 'loading') {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#8B4513" />
      </View>
    );
  }

  if (status === 'failed' || !selectedMovie) {
    return (
      <View style={styles.container}>
        <Text style={styles.placeName}>Failed to load movie details</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
    
      <Image source={{ uri: selectedMovie.poster_path }} style={styles.placeImage} />

      
      <View style={styles.infoContainer}>
        <Text style={styles.placeName}>{selectedMovie.title}</Text>
        <Text style={styles.placeLocation}>{selectedMovie.release_date}</Text>
        <Text style={styles.placeRating}>⭐ {selectedMovie.vote_average}</Text>

       
        <Text style={styles.description}>{selectedMovie.overview}</Text>

      
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${selectedMovie.budget}</Text>
          </View>

          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Watch Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
