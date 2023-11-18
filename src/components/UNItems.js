import React from 'react';

export default function UNItems(props) {
  const {newsImage, newsLink, newsTitle, newsDescription, timeDetails, newsAuthor, newsSource} = props;  
  return (
    <div>
       <div className="card mb-3" style={{maxWidth:'600px'}}>
      <img src={newsImage} className="card-img-top" alt="..." />
      <span className="position-absolute top-0 start-100 translate-middle badge bg-success">{newsSource}</span>
      <div className="card-body">
        <h5 className="card-title">{newsTitle}</h5>
        <p className="font-weight-bold mt-1">by {newsAuthor}</p>
        <p className="card-text">
          {newsDescription}
        </p>
        <a href={newsLink} target='_blank' className="btn btn-primary">Read Full News</a>
        <p className="card-text">
          <small className="text-danger">{timeDetails} hours ago!</small>
        </p>
      </div>
    </div>
    </div>
  );
}
