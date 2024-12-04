import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as MovieAPI from '../api/MovieApi';

export const fetchRandomMovies = createAsyncThunk('movies/fetchRandomMovies', async () => {
  const response = await MovieAPI.fetchRandomMovies();
  return response.data.results; 
});

export const fetchTrendingMovies = createAsyncThunk('movies/fetchTrendingMovies', async () => {
  const response = await MovieAPI.fetchTrendingMovies();
  return response.data.results; 
});

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies', async () => {
  const response = await MovieAPI.fetchPopularMovies();
  return response.data.results; 
});

export const searchMovies = createAsyncThunk('movies/searchMovies', async (query: string) => {
  const response = await MovieAPI.searchMovies(query);
  return response.data.results;
});

export const getMovieDetails = createAsyncThunk('movies/getMovieDetails', async (movieId: string) => {
  const response = await MovieAPI.getMovieDetails(movieId);
  return response.data;
});

interface MovieState {
  movies: any[]; 
  watchlist: any[];  // Store the user's watchlist here
  selectedMovie?: any; 
  status: 'idle' | 'loading' | 'failed'; 
}

const initialState: MovieState = {
  movies: [],
  watchlist: [],  // Initial empty watchlist
  selectedMovie: undefined,
  status: 'idle',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      const movie = action.payload;
      if (!state.watchlist.find(item => item.id === movie.id)) {
        state.watchlist.push(movie);  // Add the movie to the watchlist if it's not already there
      }
    },
    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(movie => movie.id !== action.payload.id);  // Remove the movie from the watchlist
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchRandomMovies.rejected, (state) => {
        state.status = 'failed';
      })
      // Add more cases here for other API calls...
  },
});

export const { addToWatchlist, removeFromWatchlist } = moviesSlice.actions;

export default moviesSlice.reducer;
