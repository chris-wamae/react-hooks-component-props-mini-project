import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Article from "./Article";
import About from "./About";
import Header from "./Header";

function App() {
  return (
    <div className="App">
   <Header name={blogData.name}/>
   <ArticleList />
   <About src={blogData.image} about={blogData.about} />
    </div>
  );
}

export default App;
