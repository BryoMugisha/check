
import React from 'react'
import "./App.css";
import movie from './doc.jpg';
import movie1 from './mat.jpg';
import movie2 from './ch.jpg';

function Picture() {
    return (
        <div className="pics">
          
          
          <div className="pic_posters">
          
            <img src={movie} alt="pic" height="180" width="320" /> 
            <img src={movie1} alt="pic" height="180" width="320" />
            <img src={movie2} alt="pic" height="180" width="320"/>
            <img src={movie} alt="pic" height="180" width="320"/>
            <img src={movie} alt="pic" height="180" width="320"/>
            <img src={movie} alt="pic" height="180" width="320"/>
            <img src={movie} alt="pic" height="180" width="320"/>
          </div>
            

        </div>
    )
}

export default Picture
