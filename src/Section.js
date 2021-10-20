import React from 'react';
import "./Section.css";




function Section( { title, description, img }) {
    return (
       
        <div className="section">

                <img src={img} alt="" />          
                <h1>{ title }</h1>
                <p>{ description }</p>      
        </div>
        
        
    
    )
}

export default Section