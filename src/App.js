import React, { Component } from "react";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import { Movie } from "./components/Movie";
import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  state = {
    results: []
  };

  handleResults = results => {
    this.setState({ results });
  };

  renderResults = () => {
    return this.state.results.map(peli => (
      <Movie
        key={peli.imdbID}
        title={peli.Title}
        year={peli.Year}
        poster={peli.Poster}
      />
    ));
  };

  render() {
    const { results } = this.state;
    return (
      <div className="container">
        <Title>Buscador de Peliculas</Title>
        <div className="centrado">
          <SearchForm handleResults={this.handleResults} />
          {results.length === 0 ? <p>sin resultados</p> : this.renderResults()}
        </div>
      </div>
    );
  }
}

export default App;
