import React, { Component } from "react";
import MovieList from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";
import { Title } from "./components/Title";
import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  state = {
    results: [],
    useSearch: false
  };

  handleResults = results => {
    this.setState({ results, useSearch: true });
  };

  renderResults = () => {
    const { results } = this.state;
    return results.length === 0 ? (
      <p>sin resultados</p>
    ) : (
      <MovieList movies={results} />
    );
  };

  render() {
    const { useSearch } = this.state;
    return (
      <div className="container">
        <Title>Buscador de Peliculas</Title>
        <div className="centrado">
          <SearchForm handleResults={this.handleResults} />
          {useSearch ? this.renderResults() : <p>usa el formulario</p>}
        </div>
      </div>
    );
  }
}

export default App;
