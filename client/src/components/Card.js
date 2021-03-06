import React from "react";
import { noImg } from "../utils/contacts";

export default function Card({ article, handleModalShow }) {
  return (
    <div className="card" onClick={() => handleModalShow(article)}>
      <img
        src={article.urlToImage ? article.urlToImage : noImg}
        className="card-img-top"
        alt={article.title}
      />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
      </div>
    </div>
  );
}
