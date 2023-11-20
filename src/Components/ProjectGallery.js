import React, { useEffect, useCallback, useState } from "react";
import "../Styles/ProjectGallery.css";
import Macabre from "../images/macabre.png"
import dicey from "../images/dicey.jfif"
import event_horizon from "../images/event_horizon.JPG"
import bedash from "../images/bedash.png"
import vibora from '../images/vibora.jfif'
import sunken from "../images/sunken.jpg"
import disarm from "../images/disarm.jpg"
import wingit from "../images/wingit.jpg"


/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-react-card-carousel-component
 */

const cardItems = [
  {
    id: 1,
    title: "Macabre",
    image: Macabre,
    link: "https://tejas022.itch.io/macabre",
    copy: "Macabre Game, created by GDU PICT students Tejas Bendkule, Malhar Choure, and Chinmay Surve, is a top-notch 3D horror experience. Using Unity and Blender, they crafted a spooky world that won first prize at IIT Madras."
  },
  {
    id: 2,
    title: "Vibora",
    image: vibora,
    link: "https://gamedevutopia.itch.io/vibora-game",
    copy:
      "Taking steps from the classic Snake Game but with a potent and clever enemy alike which targets your food and life even if it means its demise. Get your snake rolling and bring your best arcade skills to get survive and thrive! Made By Co Founder of GDU Apurv Henkare in Love2D (Lua).",
  },
  {
    id: 3,
    title: "Dicey Roads",
    image: dicey,
    copy:
      "A puzzle and strategy game where your wits are tested to see if you can win before rage quitting or punching a hole in your monitor. Also since it was originally made for a jam don't spam keys. Made By Tejas Sonone, Ayush Gupta and Malhar Choure in Unity (C#).",
    link: "https://tejas022.itch.io/dicey-roads"
  },
  {
    id: 4,
    title: "BE-Dash",
    image: bedash,
    link: "https://kushalbhalgat.itch.io/be-dash",
    copy: "B.E Dash, a solo survival game depicting the tough engineering journey, was created by Kushal Balghat from GDU PICT using Unity. Each game level mirrors a year, illustrating the shift from knowing everything to knowing nothing. The game captures the dynamic difficulty of engineering, offering a hardcore challenge."
  },
  {
    id: 5,
    title: "Event Horizon",
    image: event_horizon,
    link: "https://gamedevutopia.itch.io/event-horizon",
    copy: "Event Horizon is a unique game centered around the theme of parallel worlds. Crafted with thoughtful level design, the game features four distinct levels. Made In Love2d (Lua) By Apurv and Prajwal. This Game also won IIIT Kottayam Game Jam."
  },
  {
    id: 6,
    title: "Sunken",
    image: sunken,
    link: "https://gamedevutopia.itch.io/sunken",
    copy: "Aliens attacked Earth, and we're safe underwater with antimatter railguns as our last defense. In a game by GDU Co-founders Mihir Ranade, Prajwal Pawar, and Apurv Henkare using Love2D (Lua), your mission is to deliver antimatter warheads to load up the railguns and save humanity."
  },
  {
    id: 7,
    title: "Disarm-It",
    image: disarm,
    link: "https://bharathk33.itch.io/disarm-it",
    copy: "Disarm It, a game by S. Bharath Krishnan and S. Krishna Narayan from GDU IIIT Kottayam, is a survival challenge in Unity (C#). In this game, a bomb is planted on a car, and you have just 2 minutes to survive. Can you disarm it and make it out in time?"
  },
  {
    id: 8,
    title: "Wing-It",
    image: wingit,
    link: "https://bharathk33.itch.io/wingit",
    copy: "Inspired by Flappy Bird and created using the C++ programming language with the SDL library. In this game, players guide a young bird through a challenging environment filled with falling rocks. Credits to the developers: Pratyush, Bharath, Gowrish, and Govind from GDU IIIT Kottayam."
  },

];

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

const CardCarousel = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1
      });
    } else {
      setIndexes(prevState => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 4000);

    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes]);

  return (
    <div className="lg:m-16">
      <div className="justify-content-center gx-0 row align-self-center" id="project_gallery">
        <h1 className="project_heading">Project Gallery</h1>
        <ul className="card-carousel">
          {cardItems.map((card, index) => (
            <li
              key={card.id}
              className={`Project_card ${determineClasses(indexes, index)}`}
            >

              <div className="row">
                <div className="col-md-3 col-sm-6 project_col " ><img src={card.image} alt="img not found" className="project_image"></img></div>
                <div className="col-md-9 col-sm-6 project_col" ><h2 className="game_name">{card.title}</h2>
                  <p style={{ textAlign: "justify-left", color: "white" }}>{card.copy}</p>
                  <br />
                  <a href={card.link} className="playbtn">Play</a>


                </div>
              </div>





            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardCarousel;
