import React from 'react';
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import yacht from "./images/CharterYacht.png";
import AboutUs from "./Components/AboutUs";
import ContactForm from "./Components/ContactForm";
import CardCarousel from './Components/ProjectGallery';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return ( 
    <div className="main_class">
      <Navbar/>
      <HomePage/>
      <AboutUs/>
      <CardCarousel/>
      
     
      
      
      
     
    </div>
  );
}

export default App;