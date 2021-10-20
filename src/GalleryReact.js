import React, {useState} from 'react'

import Menu from "./Menu";


const GalleryReact = () => {

    const[items, setItems] = useState(Menu);

    return (
        <>
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-warning">Trending Now</button>
                    <button className="btn btn-warning">Recently Added</button>
                    <button className="btn btn-warning">Premiering Soon</button>
                    <button className="btn btn-warning">Recommended</button>
                    <button className="btn btn-warning">Stories</button>
                </div>

            </div>

            {
                items.map((elem) => {
                    const { id, image, name, description, price } = elem; 

                    return (
        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4">
            <div className="row Item-inside">
                <div className="menu-items container-fluid mt-5">
                    <img key={id} src={image} alt="" className="img-fluid" />
                </div>
                <div className="main-title pt-4 pb-3">
                    
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
                <div className="menu-price-book">
                    <h2>{price}</h2>
                </div>
            </div>
        </div>

        
                    )
                })
            }
            
        </>
        
        
    )
}

export default GalleryReact
