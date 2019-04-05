import React, { Component } from "react";
import PropTypes from "prop-types";
import { Movie } from "./Movie";

export default class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array
  };

  render() {
    const { movies } = this.props;
    return (
      <div className="movielist-container">
        {movies.map(peli => (
          <div className="movielist-item" key={peli.imdbID}>
            <Movie title={peli.Title} year={peli.Year} poster={peli.Poster} />
          </div>
        ))}
      </div>
    );
  }
}
