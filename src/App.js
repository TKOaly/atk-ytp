import React, { Component } from 'react'
import Head from './components/Head'
import Navbar from './components/Navbar'
import './App.css'
import Info from './components/Info'
import Schedule from './components/Schedule'
import Spacer from './components/Spacer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Head />
        <Info />
        <Spacer />
        <Schedule />
      </div>
    );
  }
}

export default App;
