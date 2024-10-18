# tmdb-movies

A lightweight Node.js wrapper for The Movie Database (TMDB) API. 

## Features
- Fetch popular movies
- Search for movies by name
- Retrieve movie details by ID
- Get TV show details by ID

# Installation

To install the package, use npm:
```
npm install tmdb-movies
```

# Usage
First, you need to get an API key from The Movie Database (TMDB). Once you have your API key, you can use the package in your Node.js project.

## Setup
Environment Variables: Create a .env file in the root of your project and add your TMDB API key as follows:
```
TMDB_API_KEY=your_api_key_here
```

### Basic Usage: Here’s how to use the package:
```
require('dotenv').config();
const { getPopularMovies, searchMovies, getMovieDetails, getTVShowDetails } = require(''tmdb-movies);

async function fetchMovies() {
  try {
    // Get popular movies
    const popularMovies = await getPopularMovies();
    console.log('Popular Movies:', popularMovies.results);

    // Search for a movie
    const searchResults = await searchMovies('Inception');
    console.log('Search Results:', searchResults.results);

    // Get details for a specific movie
    const movieDetails = await getMovieDetails(550);
    console.log('Movie Details:', movieDetails);

    // Get TV show details
    const tvShowDetails = await getTVShowDetails(1399);
    console.log('TV Show Details:', tvShowDetails);
  } catch (error) {
    console.error(error);
  }
}

fetchMovies();
```

## Functions

### getPopularMovies()
Retrieves a list of popular movies.
```
const popularMovies = await getPopularMovies();
```
Returns: An object containing an array of popular movies.

### searchMovies(query)
Searches for movies based on a query string.
```
const searchResults = await searchMovies('Inception');
```
Arguments:
query (string): The name of the movie to search for.
Returns: An object containing search results.

### getMovieDetails(movieId)
Retrieves details for a specific movie by its TMDB ID.
```
const movieDetails = await getMovieDetails(550);
```
Arguments:
movieId (number): The ID of the movie.
Returns: An object containing movie details.

### getTVShowDetails(tvShowId)
Retrieves details for a specific TV show by its TMDB ID.
```
const tvShowDetails = await getTVShowDetails(1399);
```
Arguments:
tvShowId (number): The ID of the TV show.
Returns: An object containing TV show details.

# API Key
To use this package, you need to create a .env file in the root of your project and store your TMDB API key there:
```
TMDB_API_KEY=your_api_key_here
```

# Environment Variables
This package requires a .env file containing your TMDB API key as shown below:
```
TMDB_API_KEY=your_tmdb_api_key_here
```

# Errors
If an API call fails or returns an error, the package will throw an error with a descriptive message.

# Contributions
Feel free to fork this package and submit pull requests. All contributions are welcome.

# License
This project is licensed under the Apache 2.0 License - see the LICENSE file for details.


