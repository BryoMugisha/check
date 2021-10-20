import React, {useState, useEffect } from 'react';
import "./Nav.css"; 
import LogoName from './tcc.svg';
import Avatar from './alarm.svg';



function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } 
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        
            <div className={`nav ${show && "nav_black"}`}>
                <img
                className="nav_logo"
                src={LogoName}
                alt="Logo"
                />
                <div className="menu">
                    <li>Home</li>
                    <li>About</li>
                    <li>Explore</li>
                    <li>Trainings</li>
                </div>

                <img
                className="nav_avatar"
                src={Avatar}
                alt="UserProfile"
                />
            </div>
        
    )
}

export default Nav
