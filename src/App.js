import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
        <h1>news app</h1>
        <News/>
      </div>
    )
  }
}
