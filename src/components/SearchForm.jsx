import React, { Component } from "react";

export class SearchForm extends Component {
  state = {
    inputPelicula: ""
  };

  handleChange = ({ target }) => {
    this.setState({ inputPelicula: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.inputPelicula);
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
