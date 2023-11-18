import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';

export class NewsContainer extends Component {
   
    
    constructor(props) {
        super(props);
        
        // Initializing state
        this.state = {
            article: [],
            page: 1,
            isLoading: true
        };
    }
  componentDidMount = () =>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33956653838c4b208992851ab7315a6d&page=${this.state.page}&pageSize=10`)
    .then((response) => response.json())
    .then((data) => {
      // Update state with fetched data
      console.log(data)
      this.setState(
        { 
            article: data.articles,
            totalNews: data.totalResults,
            isLoading: false
             
        });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }  
  handlePrevBtn =() =>{
    this.setState(
        { 
            isLoading: true
             
        });
    const currentPage =  this.state.page - 1; 
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33956653838c4b208992851ab7315a6d&page=${currentPage}&pageSize=10`)
    .then((response) => response.json())
    .then((data) => {
      // Update state with fetched data
      console.log(data)
      this.setState(
        { 
            article: data.articles,
            isLoading: false,
            page: currentPage
             
        });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

  }
  handleNextBtn =() =>{
    this.setState(
        { 
            isLoading: true
             
        });
    const currentPage =  this.state.page + 1; 
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33956653838c4b208992851ab7315a6d&page=${currentPage}&pageSize=10`)
    .then((response) => response.json())
    .then((data) => {
      // Update state with fetched data
      console.log(data)
      this.setState(
        { 
            article: data.articles,
            isLoading: false,
            page: currentPage
             
        });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });


  }

  render() {
    return (
      <>
      <div className="text-center mb-4" style={{marginTop:"100px !important"}}><h2>Ultra News </h2> <h3>Get your daily dose of information! </h3></div> 
      {this.state.isLoading &&  <Loading/>}
      <div className="d-flex justify-content-around flex-wrap" style={{margin:"10px 20%"}}>
      {(this.state.article && !this.state.isLoading) && this.state.article.map((element) => {
        return <NewsItem newsImage={element.urlToImage} newsLink ={element.url} newsTitle ={element.title} newsDescription= {element.description}/>
      })}
      </div>
     <div className="text-center">Page No {this.state.page}</div> 
     <div className="d-flex justify-content-around mb-5">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevBtn}>&larr; Previous</button>
        <button disabled={Math.ceil(this.state.totalNews/10)<=this.state.page} type="button" className="btn btn-dark" onClick={this.handleNextBtn}>Next &rarr;</button>
     </div>
      </>  
    );
  }
}

export default NewsContainer;
