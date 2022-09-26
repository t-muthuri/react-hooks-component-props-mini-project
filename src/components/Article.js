import React from "react";

function Article ({title, date="Jan 1, 1970", preview}){
    return(
        <div>
            <article>
                <h3>{title}</h3>
                <small>{date}</small>
                <p>{preview}</p>
            </article>
        </div>
    )
}

export default Article;