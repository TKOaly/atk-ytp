import React, { Component } from 'react';
import Head from './components/Head'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <div className="shitstorm">
          <img src="/img/shitstorm.svg" width="200 200" alt=""/>
        </div>
        <div className="lines">
          <img src="/img/lines.svg" width="400 400" alt="" />
        </div>
      </div>
    );
  }
}

export default App;
