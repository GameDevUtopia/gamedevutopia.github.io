// import {Link} from "react-router-dom"
import yacht from "../images/CharterYacht.png"
import "../Styles/HomePage.css";
import React, { Component } from "react";
import {Link} from 'react-scroll'
/*function LandingPageButton() {
    return (<button class=" buttonClass" > 
    <span className="buttonClass">
        About Us
    </span>
</button>);
        
   
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "black"
    }
    return <div style={style}>
        
        <div className="title">
        Welcome to GameDevUtopia
        </div>
        
        <div className="title">
           
        </div>
        <br />
        <LandingPageButton />
    </div>
}
function LandingFrame() {
    const style = {
        "background-image": `url({yacht})`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div className="home">
        <LandingFrameMessage />
    </div>
}
function HomePage() {
    return <div>
        <LandingFrame />
    </div>
}
export default HomePage*/

const HomePage = () => {
    return (
        <div className='home'>
            <h1>Welcome to GameDevUtopia</h1>
            <p>A student-run Game Developers community</p>
            <button className="buttonClass"><Link  to="about_us" spy={true} smooth={true}>About Us</Link></button>
        </div>
    );
};

export default HomePage;