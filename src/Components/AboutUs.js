import "../Styles/AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs_card from "./AboutUs_components/AboutUs_card";
import code_image from "../images/code_image.png";
import unity from "../images/unity_logo.png";
import graphic from "../images/graphic_design.png";
import web_design from "../images/web_design.png";
import marketing from "../images/social_media.png";
function AboutUs(){
    return ( <section id = "about_us">
   
    <section id="cards" >
        <h1 className="heading">
        ABOUT US
        </h1>
        <AboutUs_card title="Lua Team" text=" In this team, we conducted different sessions, including the basics of Lua as a scripting language, tables as a data structure in Lua, and creating games using the Love2D Game Engine framework." image={code_image} />
        <AboutUs_card title="Unity Team" text="  unity team conducted the sessions to aware juniors regarding the unity interface, scripting, unity input system and many more things related to unity." image={unity} />
        <AboutUs_card title="Design Team" text=" This team works on the basics of Blender as a 3D modelling software and as a tool for creating 2D assets for the Games which we make. We have made many different Game assets using blenders and also many different themes of artwork" image={graphic} />
        <AboutUs_card title="Marketing Team" text=" The marketing team works on marketing and advertisement of our club, and games through various social media platforms like Linked-in, Instagram, Twitter etc. and also manage sponsors for the event" image={marketing} />
        <AboutUs_card title="Web Dev Team" text="  Web Development is also one of the main team in gamedevutopia. The web development team makes new websites and organize activities are organized to help students sharpen their Web-Dev skills" image={web_design} />
    </section>
   
    </section>);
}

export default AboutUs;