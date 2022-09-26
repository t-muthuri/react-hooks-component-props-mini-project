import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header";
import About from "../components/About";
import Articlelist from "../components/Articlelist";

console.log(blogData);

function App() {
  return (
    <div>
      <Header header={blogData.name}/>
      <About about={blogData.about}/>
    </div>
  );
}

export default App;

//COMPONENTS TREE
//APP
  //HEADER
  //ABOUT
  //ARTICLELIST
    //ARTICLE