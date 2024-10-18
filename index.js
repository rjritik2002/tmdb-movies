// Importing Axios library
require('dotenv').config();
const axios = require('axios');

// API Key and Base URL for TMDB API
const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// Helper function to make API requests using Axios
async function fetchFromTMDB(endpoint, params = {}) {
  const url = `${BASE_URL}${endpoint}`;

  // Adding the API key and other query parameters to the request
  const options = {
    params: {
      api_key: API_KEY,
      ...params,
    },
  };

  try {
    // Performing the HTTP request using Axios
    const response = await axios.get(url, options);
    return response.data;  // Axios automatically parses JSON for you
  } catch (error) {
    console.error(`Request failed: ${error.message}`);
    throw new Error('Failed to fetch data from TMDB');
  }
}

/* ====================== MOVIE FUNCTIONS ====================== */

// Get details of a specific movie by its ID
function getMovieDetails(movieId) {
  return fetchFromTMDB(`/movie/${movieId}`);
}

// Search for movies by a search query (title)
function searchMovies(query, page = 1) {
  return fetchFromTMDB('/search/movie', { query, page });
}

// Get a list of popular movies
function getPopularMovies(page = 1) {
  return fetchFromTMDB('/movie/popular', { page });
}

// Get a list of movies that are currently playing in theaters
function getNowPlayingMovies(page = 1) {
  return fetchFromTMDB('/movie/now_playing', { page });
}

// Get a list of upcoming movies
function getUpcomingMovies(page = 1) {
  return fetchFromTMDB('/movie/upcoming', { page });
}

// Get a list of top-rated movies
function getTopRatedMovies(page = 1) {
  return fetchFromTMDB('/movie/top_rated', { page });
}

// Get images (posters, backdrops) for a specific movie
function getMovieImages(movieId) {
  return fetchFromTMDB(`/movie/${movieId}/images`);
}

// Get videos (trailers, teasers) for a specific movie
function getMovieVideos(movieId) {
  return fetchFromTMDB(`/movie/${movieId}/videos`);
}

// Get credits (cast, crew) for a specific movie
function getMovieCredits(movieId) {
  return fetchFromTMDB(`/movie/${movieId}/credits`);
}

/* ====================== TV SHOW FUNCTIONS ====================== */

// Get details of a specific TV show by its ID
function getTVShowDetails(tvId) {
  return fetchFromTMDB(`/tv/${tvId}`);
}

// Search for TV shows by a search query (title)
function searchTVShows(query, page = 1) {
  return fetchFromTMDB('/search/tv', { query, page });
}

// Get a list of popular TV shows
function getPopularTVShows(page = 1) {
  return fetchFromTMDB('/tv/popular', { page });
}

// Get a list of top-rated TV shows
function getTopRatedTVShows(page = 1) {
  return fetchFromTMDB('/tv/top_rated', { page });
}

// Get a list of TV shows currently airing
function getOnTheAirTVShows(page = 1) {
  return fetchFromTMDB('/tv/on_the_air', { page });
}

// Get a list of TV shows airing today
function getAiringTodayTVShows(page = 1) {
  return fetchFromTMDB('/tv/airing_today', { page });
}

// Get images (posters, backdrops) for a specific TV show
function getTVShowImages(tvId) {
  return fetchFromTMDB(`/tv/${tvId}/images`);
}

// Get videos (trailers, teasers) for a specific TV show
function getTVShowVideos(tvId) {
  return fetchFromTMDB(`/tv/${tvId}/videos`);
}

// Get credits (cast, crew) for a specific TV show
function getTVShowCredits(tvId) {
  return fetchFromTMDB(`/tv/${tvId}/credits`);
}

/* ====================== PERSON (PEOPLE) FUNCTIONS ====================== */

// Get details of a specific person (actor, director, etc.) by their ID
function getPersonDetails(personId) {
  return fetchFromTMDB(`/person/${personId}`);
}

// Search for people (actors, directors) by name
function searchPeople(query, page = 1) {
  return fetchFromTMDB('/search/person', { query, page });
}

/* ====================== GENRES FUNCTIONS ====================== */

// Get a list of movie genres
function getMovieGenres() {
  return fetchFromTMDB('/genre/movie/list');
}

// Get a list of TV show genres
function getTVGenres() {
  return fetchFromTMDB('/genre/tv/list');
}

/* ====================== TRENDING FUNCTIONS ====================== */

// Get trending movies, TV shows, or people (mediaType: 'all', 'movie', 'tv', or 'person')
// (timeWindow: 'day' or 'week')
function getTrending(mediaType = 'all', timeWindow = 'day') {
  return fetchFromTMDB(`/trending/${mediaType}/${timeWindow}`);
}

/* ====================== EXPORT FUNCTIONS ====================== */

// Export functions for use in other modules
module.exports = {
  getMovieDetails,
  searchMovies,
  getPopularMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getMovieImages,
  getMovieVideos,
  getMovieCredits,
  getTVShowDetails,
  searchTVShows,
  getPopularTVShows,
  getTopRatedTVShows,
  getOnTheAirTVShows,
  getAiringTodayTVShows,
  getTVShowImages,
  getTVShowVideos,
  getTVShowCredits,
  getPersonDetails,
  searchPeople,
  getMovieGenres,
  getTVGenres,
  getTrending,
};
