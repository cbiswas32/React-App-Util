import React,{useState, useEffect} from 'react';
import UNItems from './UNItems';

export default function UnlimitedNews() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalNews, setTotalNews] = useState(0);
  
  return (
    <div>
      <h1 className="mt-1 mb-4">Unlimited News</h1>
      <div className="d-flex justify-content-around flex-wrap" style={{margin: '3% 30%'}}>
      {(articles && !isLoading) && articles.map((element) => {
        return <UNItems newsImage={element.urlToImage} newsLink ={element.url} newsTitle ={element.title} newsDescription= {element.description}/>
      })}
      </div>  
    </div>
  );
}
