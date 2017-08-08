import React, { Component } from 'react'
import Results from '../Results'
import Search from '../Search'
import './style.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Results />
        <Search />
      </div>
    );
  }
}

export default App;
