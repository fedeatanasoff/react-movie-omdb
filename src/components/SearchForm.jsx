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

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputPelicula}`)
      .then(res => res.json())
      .then(({ Search, totalResults }) => console.log(Search));

    e.target.reset();
  };

  render() {
    return (
      <form className="field has-addons" onSubmit={this.handleSubmit}>
        <div className="control">
          <input
            type="text"
            className="input"
            onChange={this.handleChange}
            placeholder="Find a repository"
          />
        </div>
        <div className="control">
          <button className="button is-info">Buscar</button>
        </div>
      </form>
    );
  }
}
