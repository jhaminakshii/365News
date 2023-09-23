import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
  render() {
    return (
      <div>
      <h3>news to be shown</h3>
        <NewsItems/>
      </div>
    )
  }
}
