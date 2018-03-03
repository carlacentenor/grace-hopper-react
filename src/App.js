import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Main/>
      <Aside/>
      </div>
    );
  }
}

export default App;
