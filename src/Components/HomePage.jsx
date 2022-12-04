import {Link} from "react-router-dom"
import yacht from "../images/CharterYacht.png"
import "../Styles/HomePage.css";
function LandingPageButton() {
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
    /*const style = {
        "background-image": `url({yacht})`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }*/
    return <div className="home">
        <LandingFrameMessage />
    </div>
}
function HomePage() {
    return <div>
        <LandingFrame />
    </div>
}
export default HomePage