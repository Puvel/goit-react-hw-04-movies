/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { fetchTrendingMovies } from '../services/moviesApi';
import MoviesList from '../moviesList/MoviesList';

class HomePage extends Component {
  state = { movies: [] };

  componentDidMount() {
    fetchTrendingMovies().then(data => this.setState({ movies: data.results }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2>Trending today</h2>
        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default HomePage;
