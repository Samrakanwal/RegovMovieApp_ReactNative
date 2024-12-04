import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailScreen from '../screens/DetailScreen/DetailScreen';
import WatchlistScreen from '../screens/WatchListScreen/WatchlistScreen';
import UserProfileScreen from '../screens/Profile/UserProfileScreen';
import LoginScreen from '../screens/Login/LoginScreen';


export type RootStackParamList = {
  Login:undefined;
  Home: undefined;
  MovieDetail: { movieId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Movies' }} />
        <Stack.Screen name="MovieDetail" component={DetailScreen} options={{ title: 'Movie Details' }} />
        <Stack.Screen name="WatchList" component={WatchlistScreen} options={{ title: 'WatchList' }} />
        <Stack.Screen name="Profile" component={UserProfileScreen} options={{ title: 'profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
