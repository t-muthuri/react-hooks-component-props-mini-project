import React from "react";

function About({image, about}){
    return(
        <div>
            <aside>
            <img src="https://via.placeholder.com/215" alt="blog logo">{image}</img>
            <p>{about}</p>
            </aside>
        </div>
    )
}
export default About;