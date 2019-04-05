import React, { Component } from "react";
import PropTypes from "prop-types";

export class Movie extends Component {
  static propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
  };

  render() {
    const { title, year, poster } = this.props;
    return (
      <div class="card">
        <div class="card-image">
          <figure class="image ">
            <img alt={title} src={poster} />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{title}</p>
              <p class="subtitle is-6">{year}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
