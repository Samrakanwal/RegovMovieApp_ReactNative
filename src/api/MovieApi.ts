import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';  
const BASE_URL = 'https://api.themoviedb.org/3/';


const createAxiosInstance = (token: string | null) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : '', 
    },
  });

  return axiosInstance;
};


export const fetchRandomMovies = (token: string | null) => {
  const axiosInstance = createAxiosInstance(token);
  return axiosInstance.get('movie/random');
};

export const fetchTrendingMovies = (token: string | null) => {
  const axiosInstance = createAxiosInstance(token);
  return axiosInstance.get('trending/all');
};

export const fetchPopularMovies = (token: string | null) => {
  const axiosInstance = createAxiosInstance(token);
  return axiosInstance.get('movie/popular');
};

export const searchMovies = (token: string | null, query: string) => {
  const axiosInstance = createAxiosInstance(token);
  return axiosInstance.get('search/movie', {
    params: { query },
  });
};

export const getMovieDetails = (token: string | null, id: string) => {
  const axiosInstance = createAxiosInstance(token);
  return axiosInstance.get(`movie/${id}`);
};
