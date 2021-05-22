import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import getDataFromAPI from "./utils/service";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

const App = () => {
  const [queryInput, setQueryInput] = useState("");
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [header, setHeader] = useState("");
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleHeader = (_page) => {
    if (queryInput && queryInput !== "") {
      setHeader(`Showing ${_page.totalResults} result of ${queryInput}`);
    } else {
      setHeader("Top headlines");
    }
  };

  const setState = (_articles, _page) => {
    setArticles(_articles);
    setShowLoadMore(_page.totalPage !== 0 && currentPage !== _page.totalPage);
    setLoading(false);
    handleHeader(_page);
  };

  const handleArticlesData = async () => {
    const response = await getDataFromAPI(currentPage, queryInput);
    setState([...articles, ...response.articles], response.page);
  };

  const handleSearch = async () => {
    setLoading(true);
    const response = await getDataFromAPI(currentPage, queryInput);
    setState(response.articles, response.page);
  };

  const handleLoadMore = () => {
    setLoading(true);
    setCurrentPage(currentPage + 1);
    handleArticlesData();
  };

  useEffect(() => {
    handleArticlesData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        loading={loading}
        handleSearch={handleSearch}
        setQueryInput={setQueryInput}
      />
      <Page
        loading={loading}
        header={header}
        articles={articles}
        showLoadMore={showLoadMore}
        handleLoadMore={handleLoadMore}
      />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
