import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import Page from './views/Home'

const App = () => {
  const [ queryInput, setQueryInput ] = useState("") 
  return (
    <BrowserRouter>
      <Navbar setQueryInput={setQueryInput}/>
      <Page queryInput={queryInput}/>
      {/* <Routes queryInput={queryInput}/> */}
    </BrowserRouter>
  );
};


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
