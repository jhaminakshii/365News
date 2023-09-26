import React from 'react'

 const NewsItems =(props) => {

    let { title, description, imgUrl, newsUrl, author, date ,source } = props;
    return (
      <div>
        <div className="card my-2">
          <img
            src={imgUrl}
            className="card-img-top"
            alt="News Image"
          />
          <div className="card-body">
            <h5 className="card-title">{title} 
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'50%'}}>
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

export default NewsItems
