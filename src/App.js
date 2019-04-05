import React, { Component } from "react";
import MovieList from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";
import { Title } from "./components/Title";
import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  state = {
    results: []
  };

  handleResults = results => {
    this.setState({ results });
  };

  render() {
    const { results } = this.state;
    return (
      <div className="container">
        <Title>Buscador de Peliculas</Title>
        <div className="centrado">
          <SearchForm handleResults={this.handleResults} />
          {results.length === 0 ? (
            <p>sin resultados</p>
          ) : (
            <MovieList movies={results} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
