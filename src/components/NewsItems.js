import React, { Component } from 'react'

export default class NewsItems extends Component {
    
  render() {
    let { title, description, imgUrl,newsUrl } = this.props;
    return (
      <div>
        <div className="card my-2" style={{ width: "18rem" ,height:"25rem" }}>
          <img src={imgUrl} className="card-img-top" alt="News Image" style={{ width: "18rem",height:"12rem" }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
