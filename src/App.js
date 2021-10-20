import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";

import Nav from "./Nav";
import Content from "./Content";


function App() {
  return (
    <div className="app">


      <Nav />

      <Banner />
     
    <Row title="Documentary"  />
    <Content />

    <Row title="Trending Now" fetchUrl={""} />
    <Row title="Top Rated" fetchUrl={""} />
    <Row title="Top Rated" fetchUrl={""} />

    <Row title="Stories" fetchUrl={""} />
    <Row title="Fun TV" fetchUrl={""} />
  </div>


  );
}

export default App;
