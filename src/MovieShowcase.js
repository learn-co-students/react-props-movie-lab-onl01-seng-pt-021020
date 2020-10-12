import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    let movieComponent = movieData.map(movie => <MovieCard title={movie.title} genres={movie.genres} poster={movie.poster} IMDBRating={movie.IMDBRating} />)
    return movieComponent
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
