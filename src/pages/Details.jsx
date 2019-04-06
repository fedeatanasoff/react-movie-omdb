import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonToHome from "../components/ButtonToHome";

const API_KEY = "e84027a3";

export class Details extends Component {
  static propTypes = {
    match: PropTypes.shape({
      isExact: PropTypes.bool,
      params: PropTypes.object,
      path: PropTypes.string,
      url: PropTypes.string
    })
  };

  state = { movie: {} };

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        this.setState({ movie });
      });
  }

  render() {
    console.log("props => ", this.props);
    console.log(this.state);
    return (
      <div>
        <h1>{this.state.movie.Title}</h1>
        <ButtonToHome />
      </div>
    );
  }
}
