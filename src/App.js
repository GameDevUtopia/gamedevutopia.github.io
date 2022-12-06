import React from 'react';
import { Helmet } from 'react-helmet';
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
// import yacht from "./images/CharterYacht.png";
import AboutUs from "./Components/AboutUs";
import ContactForm from "./Components/ContactForm";
import CardCarousel from './Components/ProjectGallery';
import SocialFollow from "./Components/SocialFollow"
import Footer from "./Components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return ( 
    <div className="main_class">
      <Helmet>
        <meta charSet="utf-8" />
        <title>GameDevUtopia - A student-run Game Developers' Community</title>
        <link rel="canonical" href="http://gamedevutopia.in/" />
        <meta name="description" content="GDU Website" />
      </Helmet>
      <Navbar/>
      <HomePage/>
      <AboutUs/>
      <CardCarousel/>
      <ContactForm/>
      <SocialFollow/>
      <Footer/>
      
     
      
      
      
     
    </div>
  );
}

export default App;