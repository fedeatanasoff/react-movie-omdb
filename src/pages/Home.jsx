import React, { Component } from "react";
import { SearchForm } from "../components/SearchForm";
import { Title } from "../components/Title";
import MovieList from "../components/MovieList";

export class Home extends Component {
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
      <div>
        <Title>Buscador de Peliculas</Title>
        <div className="centrado">
          <SearchForm handleResults={this.handleResults} />
          {useSearch ? (
            this.renderResults()
          ) : (
            <p>utilizamos la base de datos de OMBD </p>
          )}
        </div>
      </div>
    );
  }
}
