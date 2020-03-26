import React, { Component } from 'react';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { MovieList } from './components/MoviesList';

import './App.css';
import 'bulma/css/bulma.css';



class App extends Component {
  state = { results: [] }

  _handleResults = (results) => {
    this.setState({ results })
  };

  // _renderResults() {
  //   const { results } = this.state
  //   return results.map(movie => {
  //     return (
  //       <Movie
  //         key={movie.imdbID}
  //         title={movie.title}
  //         year={movie.year}
  //         poster={movie.poster}
  //       />
  //     )
  //   })
  // }
  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="Searchform-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.results.length === 0
          ? <p>Sin resultados </p>
          : <MovieList movies={this.state.results} />
          // : this._renderResults()
        }

      </div>
    )
  }
}

export default App;
