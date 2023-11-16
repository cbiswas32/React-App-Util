import React, { Component } from 'react';
import TestImage from './image/testimage.jpg';

export class NewsItem extends Component {
  
  render() {
    return (
      <div className="mb-4">
         <div className="card" style={{ width: '18rem' }}>
            <img src={this.props.newsImage?this.props.newsImage:TestImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.props.newsTitle}</h5>
                <p className="card-text">
                {this.props.newsDescription}
                </p>
                <a href={this.props.newsLink} target="_blank" className="btn btn-primary">
                Read News
                </a>
            </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
