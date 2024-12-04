import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
       backgroundColor: '#f8f8f8',
    },
    placeImage: {
      width: '100%',
        height: 250,
    },
    infoContainer: {
      padding: 20,
    },
    placeName: {
      fontSize: 24,
        fontWeight: 'bold',
      color: '#4B3F2F',
    },
    placeLocation: {
      fontSize: 16,
        color: '#666',
      marginBottom: 10,
    },
    placeRating: {
      fontSize: 16,
        color: '#FFD700',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#8B4513',
      marginTop: 20,
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: '#666',
      lineHeight: 22,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    priceContainer: {
      backgroundColor: '#f0e6dc',
      padding: 10,
      borderRadius: 10,
    },
    price: {
      fontSize: 18,
      color: '#8B4513',
      fontWeight: 'bold',
    },
    bookButton: {
      backgroundColor: '#8B4513',
      paddingVertical: 10,
       paddingHorizontal: 20,
      borderRadius: 10,
    },
    bookButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  export default styles;