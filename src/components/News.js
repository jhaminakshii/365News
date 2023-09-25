import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spiner from './Spiner'
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps={
      country:"in",
      pageSize:9,
      category:'general'
    }
    static propTypes ={
      country:PropTypes.string, 
      pageSize:PropTypes.number,
      category:PropTypes.string
    }
    capitalized = (word)=>{
     return word.charAt(0).toUpperCase()+ word.slice(1)
     }

     constructor(props) {
            super(props);
            this.state = {
              articles: [],
              loading: true,
              page:1
            };
            document.title = `${this.capitalized(this.props.category)}-365News`;
        }
        // updateNew = async()=>{
        //   let url =
        //       `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=53313403d76f4152ab061ff17a6843f5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     this.setState({
        //       articles: parsedData.articles,
        //       loading: false
        //     });
        //}

       async componentDidMount(){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=53313403d76f4152ab061ff17a6843f5&page=1&pageSize=${this.props.pageSize}`;
            let data =await fetch(url);
            let parsedData = await data.json();
            this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading: false})
        }
         handlePrevClick=async()=>{
            // console.log("prev");
            // this.setState({page:this.state.page-1})
            // this.updateNew();
            let url =
              `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=53313403d76f4152ab061ff17a6843f5&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
              articles: parsedData.articles,
              page: this.state.page - 1,
              loading: false
            });
        }
        handleNextClick =async ()=>{
            console.log("next");
            if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url =
              `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=53313403d76f4152ab061ff17a6843f5&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
              articles: parsedData.articles,
              page:this.state.page+1,
              loading:false
            });
            // this.setState({page:this.state.page+1})
            // this.updateNew();
        }
    }
  render() {
    return (
      <div>
        <div className="container my-4">
          <h1 className="text-center my-5">365News-Top {this.capitalized(this.props.category)} Headlines</h1>
          
          {this.state.loading && <Spiner/>}
          <div className="row my-4">
            {!this.state.loading && this.state.articles.map((elem) => {
              return (
                <div className="col-md-4" key={elem.url}>
                  <NewsItems
                    title={elem.title ? elem.title.slice(0, 45) : ""}
                    description={elem.description ? elem.description.slice(0, 88) : ""}
                    imgUrl={!elem.urlToImage?"https://cdn.ndtv.com/common/images/ogndtv.png":elem.urlToImage}
                    newsUrl={elem.url} author={!elem.author?"Unknown":elem.author} date={elem.publishedAt}  source={elem.source}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between">
          <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}> &rarr; Next</button>
          </div>
        </div>
      </div>
    );
  }
}
