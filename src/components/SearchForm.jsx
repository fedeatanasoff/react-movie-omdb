import React, { Component } from "react";

const API_KEY = "e84027a3";

export class SearchForm extends Component {
  state = {
    inputPelicula: ""
  };

  handleChange = ({ target }) => {
    this.setState({ inputPelicula: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputPelicula } = this.state;
    const { handleResults } = this.props;

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputPelicula}`)
      .then(res => res.json())
      .then(data => {
        const { Search = [], totalResults = "0" } = data;
        handleResults(Search);
      })
      .catch(e => console.log("Error => ", e));

    e.target.reset();
    this.setState({ inputPelicula: "" });
  };

  render() {
    return (
      <form className="field has-addons" onSubmit={this.handleSubmit}>
        <div className="control">
          <input
            type="text"
            className="input"
            onChange={this.handleChange}
            placeholder="ingrese una pelicula"
          />
        </div>
        <div className="control">
          <button className="button is-info">Buscar</button>
        </div>
      </form>
    );
  }
}
