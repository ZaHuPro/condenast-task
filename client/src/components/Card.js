import React from "react";
const noImg = 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_525041723_970647970450098_70024.jpg'

export default function Card({ article }) {

  return (
    <div className="card">
      <img
        src={article.urlToImage ? article.urlToImage : noImg}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">
          {article.description}
        </p>
      </div>
    </div>
  );
}
