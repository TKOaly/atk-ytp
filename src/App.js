import React, { Component } from 'react'
import Head from './components/Head'
import Navbar from './components/Navbar'
import './App.css'
import Info from './components/Info'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Head />
        <Info />
      </div>
    );
  }
}

export default App;
