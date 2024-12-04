import { ViewStyle, TextStyle, ImageStyle, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  container: {
    marginTop: 100,
    alignItems: 'center',
    flex: 1,
  } as ViewStyle,
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  } as TextStyle,
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
  } as TextStyle,
  exploreButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  } as ViewStyle,
  exploreButtonText: {
    color: '#8B4513',
    fontSize: 18,
    fontWeight: 'bold',
  } as TextStyle,
});

export default styles;
