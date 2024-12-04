import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './SplashScreenStyles';


type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,  
  'SplashScreen'
>;

interface SplashScreenProps {
  navigation: SplashScreenNavigationProp;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-photo/movie-background-collage_23-2149876032.jpg?semt=ais_hybrid' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Movie App</Text>
        <Text style={styles.subtitle}>Movies of the World</Text>

        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.exploreButtonText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
