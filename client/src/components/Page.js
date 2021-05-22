import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";

const Page = ({ articles, showLoadMore, loading, header, handleLoadMore }) => {
  const [showModal, setShowModal] = useState(true);
  const [modalArticle, setModalArticle] = useState();

  const handleModalShow = (article) => {
    setModalArticle(article);
    setShowModal(true);
  };

  return (
    <div className="content-wrapper">
      {modalArticle && (
        <Modal
          showModal={showModal}
          article={modalArticle}
          setShowModal={setShowModal}
        />
      )}
      <div className="heading-text">
        <h6>{header}</h6>
      </div>
      <div className="cards-content">
        {articles.map((each, index) => (
          <Card
            key={`card_${index}`}
            article={each}
            handleModalShow={handleModalShow}
          />
        ))}
      </div>
      <p className="loader">{loading && "Loading..."}</p>
      {showLoadMore && (
        <div className="load-more">
          <button
            disabled={loading}
            onClick={() => handleLoadMore()}
            className="btn"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
