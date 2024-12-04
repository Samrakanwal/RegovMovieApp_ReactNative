import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWatchlist } from '../../redux/movieslice';

const WatchlistScreen = () => {
  const watchlist = useSelector((state: any) => state.movies.watchlist); 
  const dispatch = useDispatch();

  const handleRemove = (movie: any) => {
    dispatch(removeFromWatchlist(movie));  
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.movieItem}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} style={styles.movieImage} />
      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle}>{item.title || item.name}</Text>
        <Text style={styles.movieOverview}>{item.overview.slice(0, 100)}...</Text>
        <TouchableOpacity onPress={() => handleRemove(item)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Watchlist</Text>
      {watchlist.length === 0 ? (
        <Text style={styles.emptyMessage}>Your watchlist is empty!</Text>
      ) : (
        <FlatList
          data={watchlist}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  emptyMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  movieItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  movieImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  movieInfo: {
    marginLeft: 15,
    flex: 1,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  movieOverview: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: '#ff6347',
    paddingVertical: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default WatchlistScreen;
