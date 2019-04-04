import React, { Component } from "react";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <Title>Buscador de Peliculas</Title>
        <div className="centrado">
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default App;
