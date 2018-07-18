import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header/Header.js';
import ListHotels from './ListHotels/ListHotels.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ListHotels />
      </div>
    );
  }
}

export default App;
