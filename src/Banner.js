import React, { useState } from 'react';

import "./Banner.css";

function Banner() { 
 const [movie] = useState([]);
 

console.log(movie);

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundPosition: "center center", 
            }}
        >

            <div className="banner_contents">
            
            <h1 className="banner_title">
               {movie?.title || movie?.name || movie?.original_name} 
            </h1>

            <div className="banner_buttons">
              <button className="banner_button">Play</button>
              <button className="banner_button">My List</button>
            </div>

            
        

            <h1 className="banner_description">{movie?.overview}</h1>
                {truncate(movie?.overview, 150)}

            </div>

            <div className="Tabs">
                <p><a href="#">Trending Now</a></p>
                <p><a href="#">Recently Added</a></p>
                <p><a href="#">Premiering soon</a></p>
                <p><a href="#">Recommended</a></p>
            </div>

            <div className="banner--fadeBottom"></div>  

            
            
        </header>
    )
}

export default Banner

