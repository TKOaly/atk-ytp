import React, { Component } from 'react'
import Head from './components/Head'
import Navbar from './components/Navbar'
import './App.scss'
import Info from './components/Info'
import Schedule from './components/Schedule'
import Spacer from './components/Spacer'
import Footer from './components/Footer'
import Team from './components/Team'
import Accomodation from './components/Accomodation'

class App extends Component {
  render () {
    return (
      <div id="home" className="App">
        <Navbar />
        <Head />
        <Info />
        <Spacer />
        <Schedule />
        <Spacer />
        <Accomodation />
        <Spacer />
        <Team />
        <Footer />
      </div>
    )
  }
}

export default App
