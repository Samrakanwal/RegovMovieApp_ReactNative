import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieslice';  
import authReducer from './authSlice';     
import userReducer from './userSlice';    
export const store = configureStore({
  reducer: {
    movies: moviesReducer,  
    auth: authReducer,      
    user: userReducer,     
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
