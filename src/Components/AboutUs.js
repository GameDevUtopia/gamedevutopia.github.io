/*import "../Styles/AboutUs.css";
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

export default AboutUs;*/

import "../Styles/AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs_card from "./AboutUs_components/AboutUs_card";
import code_image from "../images/code_image.png";
import unity from "../images/unity_logo.png";
import graphic from "../images/graphic_design.png";
import web_design from "../images/web_design.png";
import marketing from "../images/social_media.png";
import Founders from "./AboutUs_components/Founders";
import apurv from "../images/Apurv.png";
import mihir from "../images/mihir.jpg";
import prajwal from "../images/prajwal.jpg";
function AboutUs(){
    return ( <><div id = "about_us" className="cards max-h-none w-screen items-center mx-auto">

        <h1 className="justify-content-center gx-0 row align-self-center heading">
        About Us
        </h1>

        <p className="gx-0 row justify-content-center align-self-center aboutParagraph">GameDevUtopia is a student-run Game Developers Community in India. We were founded as a humble trio of passionate Game Developers in the year 2020 at PICT, Pune and today have become one of the fastest growing student-run community. We have our branches across PICT, Pune and IIIT Kottayam with plans to expand and reach multiple colleges across the country. In both of our student chapters, we have following teams to handle different aspects of game development!</p>
        
        <AboutUs_card title="Love2D Team" text="Here, we create games using the Love2D Game Engine Framework and also conduct workshops on Lua, and other libraries based on it." image={code_image} />
        <AboutUs_card title="Unity Team" text="Here we make games using the Unity Game Engine and teach students about Unity Interface, scripting, Unity Input System, etc." image={unity} />
        <AboutUs_card title="Design Team" text="When you see an amazing piece of artwork in any of our games and websites, it is thanks to our designers in this team! Here we work primarily in Blender for 3D modelling and Illustrator for 2D artworks." image={graphic} />
        <AboutUs_card title="Marketing Team" text="If you want to collaborate with us and make games happen, you contact us! Plus the growth and publicity of our club is our responsibility!" image={marketing} />
        <AboutUs_card title="WebDev Team" text="Pushing the games made by our club to various platforms and updating this website is the job we do! Also we organize activities to help open-source web development!" image={web_design} />
        </div>
        <div className="founders_title my-11 min-[320px]:my-6 ">Our Founders</div>
        <div className="flex sm:flex-row justify-center items-center min-[320px]:flex-col min-[320px]:h-96 min-[320px]:my-72 sm:my-0">
            <Founders name="Apurv Henkare" number="+91 83084 81404" fimage={apurv} />
            <Founders name="Mihir Ranade" number="+91 72185 86049" fimage={mihir} />
            <Founders name="Prajwal Pawar" number="+91 84214 29812" fimage={prajwal}/>
        </div>
        </>
    );
}

export default AboutUs;
