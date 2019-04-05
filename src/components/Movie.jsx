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
      <div className="card">
        <div className="card-image">
          <figure className="image ">
            <img alt={title} src={poster} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <h6 className="title is-6">{title}</h6>
              <p className="subtitle is-6">{year}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
