# **Movie App**
This is a React Native mobile application built with TypeScript that allows users to interact with the The Movie Database (TMDb) API. The app enables users to search for movies, view trending movies, add movies to their watchlist, view movie details and ratings, post and delete ratings, and manage their user profile. The project is structured with a focus on UI/UX principles, React Hooks, and global state management using Redux or Context API.

## Features
Login: User authentication with username and password (using TMDb credentials).
Dashboard: Displays a list of trending movies and provides a search functionality for movies.
Movie Details & Ratings Page:
View movie details (e.g., title, overview, release date).
See movie reviews and ratings.
Post and delete movie ratings.
Add or remove movies from the watchlist.
Watchlist: Shows a list of movies added to the user's watchlist.
Profile: Display user profile information and a logout option.

## Tech Stack

React Native: The framework used for building the mobile application.
TypeScript: Provides static type checking for better maintainability and developer experience.
Redux: Used for global state management 
React Navigation: Handles navigation between screens.
Axios: For making API requests.
The Movie Database (TMDb) API: The source of movie data, including trending movies, search results, details, ratings, etc.
Jest: For unit and integration testing.


## Usage

1. Login
The user can log in using their TMDb username and password. Once logged in, the app fetches the user's data and stores it in the global state.

2. Dashboard
The Dashboard screen shows a list of trending movies, which can be refreshed by pulling down. Users can also search for movies using the search bar.

3. Movie Details & Rating
Clicking on a movie title takes the user to the Movie Details screen. Here, the user can see movie details like the release date, overview, and genre. The user can post a rating, see other users' reviews, and add or remove the movie from their watchlist.

4. Watchlist
Users can view their saved movies in the Watchlist screen. From here, they can remove movies from their watchlist if desired.

5. Profile
The Profile screen displays the user's information and includes a Logout button, which logs them out and returns them to the login screen.

## Testing

Unit tests have been written using Jest

## Development Standards

Follow React Native and TypeScript best practices.
Hooks: All components make use of React Hooks where possible.
State Management: Use Redux or Context API for global state management.
Code Consistency: Follow a consistent style using Prettier and ESLint.
Responsive Design: The app is designed to be responsive and provides a smooth experience on both Android and iOS devices.
Accessibility: Ensure proper usage of accessibility props for better user experience.


## Potential Enhancements

Dark mode support.
Push notifications for new movie releases.
Watchlist sharing with other users.
Save movie trailers and posters to watch later.
Movie categorization by genre or rating.






