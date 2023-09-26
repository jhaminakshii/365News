import React,{useState,useEffect} from 'react'
import NewsItems from './NewsItems'
import Spiner from './Spiner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


 const News = (props)=> {
    
  const capitalized = (word)=>{
     return word.charAt(0).toUpperCase()+ word.slice(1)
     }
   const [articles,setArticles]=useState([]);
   const [loading,setLoading]=useState(true);
   const [page,setPage]=useState(1);
   const [totalResults,setTotalResults]=useState(0);
   

     const updateNews = async () => {
       document.title = `${capitalized(props.category)}-365News`;
       props.setProgress(10);
       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
       let data = await fetch(url);
       props.setProgress(30);
       let parsedData = await data.json();
       props.setProgress(70);
       setArticles(parsedData.articles);
       setTotalResults(parsedData.totalResults);
       setLoading(false);
       props.setProgress(100);
     };

      useEffect( ()=>{
        document.title = `${capitalized(props.category)}-365News`;
        updateNews();
      },[]);
       
        
     const fetchMoreData = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
            setPage(page + 1);
            setLoading(true );
            let data = await fetch(url);
            let parsedData = await data.json();
              setArticles(articles.concat(parsedData.articles))
              setTotalResults(parsedData.totalResults)
              setLoading(false );
      };

  
    return (
      <div>
        <h1 className="text-center my-5 pt-4">
          365News-Top {capitalized(props.category)} Headlines
        </h1>

        {/* {loading && <Spiner/>} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults.length}
          loader={<Spiner />}
        >
          <div className="container my-4">
            <div className="row my-4">
              {
                articles.map((elem) => {
                  return (
                    <div className="col-md-4" key={elem.url}>
                      <NewsItems
                        title={elem.title ? elem.title.slice(0, 45) : ""}
                        description={
                          elem.description ? elem.description.slice(0, 88) : ""
                        }
                        imgUrl={
                          !elem.urlToImage
                            ? "https://cdn.ndtv.com/common/images/ogndtv.png"
                            : elem.urlToImage
                        }
                        newsUrl={elem.url}
                        author={!elem.author ? "Unknown" : elem.author}
                        date={elem.publishedAt}
                        source={elem.source}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
 
}

News.defaultProps={
      country:"in",
      pageSize:9,
      category:'general'
    }
    News.propTypes ={
      country:PropTypes.string, 
      pageSize:PropTypes.number,
      category:PropTypes.string
    }

export default News;
