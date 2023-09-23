import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h3>365News-Top Headlines</h3>
          <div className="row">
            <div className="col-md-4">
              <NewsItems title="news details" description="news description" />
            </div>
            <div className="col-md-4">
              <NewsItems title="news details" description="news description" />
            </div>
            <div className="col-md-4">
              <NewsItems title="news details" description="news description" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
