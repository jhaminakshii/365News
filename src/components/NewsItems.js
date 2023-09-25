import React, { Component } from 'react'

export default class NewsItems extends Component {

  render() {
    let { title, description, imgUrl, newsUrl, author, date ,source } = this.props;
    return (
      <div>
        <div className="card my-2" style={{ width: "25rem", height: "30rem" }}>
          <img
            src={imgUrl}
            className="card-img-top"
            alt="News Image"
            style={{ width: "25rem", height: "15rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title} 
            <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'50%'}}>
              {source.name}
             </span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted ">
                By -{author} On {new Date(date).toGMTString()}
              </small>
            </p>

            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
