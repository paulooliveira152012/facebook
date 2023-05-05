import React from "react";
import './style.css';
import logo from '../../assets/images/dF5SId3UHWd.svg'

function Left() {
    return (
        <div className="left">
            <div className="logo"><img src={logo} alt="Facebook logo"></img></div>
            <div className="connect">
                <p>Connect with friends and the world
                    around you on Facebook.
                </p>
                
            </div>
        </div>
    )
}

export default Left;