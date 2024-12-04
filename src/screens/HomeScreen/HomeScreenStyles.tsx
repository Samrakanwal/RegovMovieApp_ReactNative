import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';


interface Styles {
  container: ViewStyle;
  header: ViewStyle;
  profileImage: ImageStyle;
  greeting: TextStyle;
  bellIcon: ViewStyle;
  icon: ImageStyle;
  searchContainer: ViewStyle;
  searchInput: TextStyle;
  tabs: ViewStyle;
  tab: TextStyle;
  tabActive: TextStyle;
  flatList: ViewStyle;
  card: ViewStyle;
  visitedCard: ViewStyle;
  placeImage: ImageStyle;
  placeName: TextStyle;
  placeLocation: TextStyle;
  placeRating: TextStyle;
  visitedButton: ViewStyle;
  visitedButtonText: TextStyle;
  sectionTitle: TextStyle;
  suggestedCard: ViewStyle;
  suggestedPlaceImage: ImageStyle;
  suggestedPlaceName: TextStyle;
  suggestedPlaceLocation: TextStyle;
  suggestedPlaceRating: TextStyle;
}


const styles: Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B3F2F',
    marginRight: 140,
  },
  bellIcon: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    fontSize: 16,
    color: '#666',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tab: {
    fontSize: 16,
    color: '#666',
  },
  tabActive: {
    fontSize: 16,
    color: '#8B4513',
    fontWeight: 'bold',
  },
  flatList: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 15,
    padding: 10,
    width: 150,
  },
  visitedCard: {
    backgroundColor: '#e6ffe6',
  },
  placeImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  placeLocation: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  placeRating: {
    fontSize: 14,
    color: '#FFD700',
  },
  visitedButton: {
    backgroundColor: '#8B4513',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 7,
    marginRight: 7,
  },
  visitedButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 10,
  },
  suggestedCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 15,
    padding: 10,
    width: 150,
  },
  suggestedPlaceImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  suggestedPlaceName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  suggestedPlaceLocation: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  suggestedPlaceRating: {
    fontSize: 14,
    color: '#FFD700',
  },
});

export default styles;
