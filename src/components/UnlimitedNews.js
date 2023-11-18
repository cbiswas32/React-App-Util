import React,{useState, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import UNItems from './UNItems';
import Loading from './Loading';
import TestImage from './image/testimage.jpg';

export default function UnlimitedNews() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalNews, setTotalNews] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY ;
  //console.log(apiKey);
  useEffect(() => {
    // Your code here (e.g., event listeners, subscriptions, etc.)
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&page=${pageNumber}&pageSize=10`)
    .then((response) => response.json())
    .then((data) => {
      // Update state with fetched data
      console.log(data);
      if(data.articles){
      setArticles(articles.concat(data.articles));
      setTotalNews(data.totalResults);
      setLoading(false); 
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
    // Cleanup function to be executed when the component is unmounted
    return () => {
      // Your cleanup code here (e.g., removing event listeners, clearing subscriptions, etc.)
    };
  }, []);

  const getArticles = () =>{
    if(Math.ceil(totalNews/10)> pageNumber){
        setLoading(true);
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&page=${pageNumber+1}&pageSize=10`)
        .then((response) => response.json())
        .then((data) => {
        // Update state with fetched data
        console.log(data);
        if(data.articles){
            setArticles(articles.concat(data.articles));
            setTotalNews(data.totalResults);
            setLoading(false); 
            setPageNumber(pageNumber+1)
        }
        
        })
        .catch((error) => {
        console.error('Error fetching data:', error);
        });
    }
  }

  const getTimeDetails = (publishDate) => {
    let targetDate = new Date(publishDate);
   
    let currentDate = new Date();
    // Calculate the time difference in milliseconds
    
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    
    // Convert milliseconds to days
    const daysDifference = Math.abs(Math.ceil(timeDifference / (1000 * 60 * 60)));
    return daysDifference;
  }

  return (
    <div>
      <h1 className="mt-1 mb-4 text-center" >Unlimited News</h1>
      {isLoading &&  <Loading/>}
      <div className="d-flex justify-content-center align-items-center flex-column flex-wrap" style={{margin: '3% 12%'}}>
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={getArticles}
        hasMore={Math.ceil(totalNews/10)>pageNumber}
        loader={<Loading />}
        style={{overflow:'visible'}}
        >
        {articles && articles.map((element) => {  
        if(element){
            return <UNItems newsImage={element.urlToImage? element.urlToImage:TestImage} newsLink ={element.url} newsTitle ={element.title} newsDescription= {element.description} timeDetails={getTimeDetails(element.publishedAt)} newsSource={element.source.name?element.source.name:"Unknown"} newsAuthor ={element.author?element.author:"Unknown"}/>
        }
        else{
            return <h3 className='text-danger'>Article cannot be rendered!</h3>
        }
        })}
      </InfiniteScroll>
      
      </div>  
    </div>
  );
}
