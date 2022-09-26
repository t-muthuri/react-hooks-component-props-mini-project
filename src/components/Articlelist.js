import React from "react";
import Article from "./Article";

function Articlelist({posts}){
    const postsInd = posts.map((post)=>(
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    ));
    return(
        <div id="article-list">
            <main>{postsInd}</main>
        </div>
    );
}

export default Articlelist;