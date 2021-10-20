 import React, { useState } from 'react';

 import "./Row.css";
 import YouTube from "react-youtube";
 import movieTrailer from "movie-trailer";



function Row({ title, fetchUrl, isLargeRow }) {

    const [movies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // a snippet code which runs based on a specific condition

    

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
                // https://developers.google.com/youtube/player_parameters 
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if  (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {

            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    };

     return ( 
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {/* several row_poster(s) */}

                {movies.map((movie) => ( 
                    <img 
                       key={movie.id}
                       onClick={() => handleClick(movie)}
                       className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                       src=""
                       alt={movie.name} 
                    />  
              ))} 
                
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                    
        </div>
    );
}

export default Row;
