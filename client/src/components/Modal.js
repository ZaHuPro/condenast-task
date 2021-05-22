import React from "react";
import { noImg } from "../utils/contacts";

export default function Modal({ article, showModal, setShowModal }) {
  return (
    <div
      className={`modal ${showModal ? "show" : "hide"}`}
      onClick={() => setShowModal(false)}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{article.title}</h5>
            <button onClick={() => setShowModal(false)} className="btn close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="content-featured">
              <img
                src={article.urlToImage ? article.urlToImage : noImg}
                className="featured"
                alt={article.title}
              />
            </div>
            <div className="content-text">
              <p>{article.content}</p>
            </div>
          </div>
          <div className="modal-footer">
            <p className="light">
              {new Date(article.publishedAt).toDateString()}
            </p>
            <p className="light">by {article.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
