import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import doAPICall from "../utils/service";

const Home = ({ queryInput }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  async function handleData() {
    const response = await doAPICall(page, queryInput);
    console.log(response);
    setArticles([...articles, ...response.articles]);
    setTotalPage(response.page.totalPage)
    setButtonDisabled(false)
  }
  useEffect(() => {
      console.log("===============")
    // setButtonDisabled(true)
    // handleData();
    console.log(queryInput)
  }, [page, queryInput]);

  return (
    <div className="content-wrapper">
      <div className="heading-text">
        <h6>Top headlines</h6>
      </div>
      <div className="cards-content">
        {articles.map((each, index) => (
          <Card key={`card_${index}`} article={each}  articleId={`article_${index}`}/>
        ))}
      </div>
      {totalPage !== page && (
        <div className="load-more">
          <button disabled={buttonDisabled} onClick={() => setPage(page + 1)} className="btn">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
