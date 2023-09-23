import React, { Component } from 'react'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>news app</h1>
        <News/>
      </div>
    )
  }
}
