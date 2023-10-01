import React, { useEffect, useCallback, useState } from "react";
import "../Styles/ProjectGallery.css";
import chaos from "../images/Chaos_Awakens.jpeg";
import Charter_Yacht from "../images/Charter_Yacht.png";
import Connect from "../images/Connect.png";
import Cubicles from "../images/Cubicles.png";
import Star from "../images/Star.png";
import Voxel from "../images/voxel_battle.jpg";


/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-react-card-carousel-component
 */

const cardItems = [
  {
    id: 1,
    title: "Charter Yacht",
    image:Charter_Yacht,
    link:"https://teams24.itch.io/charter-yacht",
    copy:
      "Charter Yacht is a unique game developed by Teams24 (a part of our club) which comes under the category of survival game. The game’s unique design allows for the player’s brain to react quickly to the dynamically changing Game environment where the player has to stress upon their visual memory in order to chart a path for the Yacht, making this game a good source of adrenaline rush!",
  },
  {
    id: 2,
    title: "Chaos Awakens",
    image:chaos,
    link:"https://teams24.itch.io/voxel-battle-chaos-awakens",
    copy: "Chaos Awakens is a game developed by Teams24 (a part of our club) which comes under the category of shooter and survival games. The game’s unique design blends both the genres of games and employs a unique algorithm for solving the enemy-crowding problem in normal 2D shooter video games. The game is a sequel of the Voxel Battle and with some noteworthy changes made in the game design to make it more chaotic and addictive."
  },
  {
    id: 3,
    title: "Connect 4",
    image:Connect,
    copy:
      "Connect 4 is a game developed by Teams24 (a part of our club) which comes under the category of puzzles and party games and is currently published on the Itch.io platform. Inspired from the classic cross-and-naughts (commonly known as X and O), the game brings new complexity to the puzzle and its unique design and GUI facilitates realistic gameplay.",
    link:"https://teams24.itch.io/connect-4"
    },
  {
    id: 4,
    title: "Cubicles",
    image:Cubicles,
    link:"https://teams24.itch.io/pict-cubicles",
    copy: "PICT Cubicles is a hyper-casual game developed by Teams24 (a part of our club) and is currently hosted on itch.io platform. The game follows an infinite loop approach and has been inspired from everyone’s favourite hyper-casual game Flappy Bird by dotGears studios."
  },
  {
    id: 5,
    title: "Star Endurance",
    image:Star,
    link:"https://teams24.itch.io/star-endurance",
    copy: "Star Endurance is a game developed by GameDevUtopia which comes under the category of third person survival shooter and is currently published on the Itch.io platform. The game design is inspired from the old school arcade game named Asteroid, which is a space themed multidirectional shooter.Our game adds various twists to that concept."
  },
  {
    id: 6,
    title: "Voxel Battle",
    image:Voxel,
    link:"https://teams24.itch.io/voxel-battle",
    copy: "Voxel Battle is a game developed by Teams24 (a part of our club) which comes under the category of shooter and survival games and is currently published on the Itch.io platform. The game’s unique design blends both the genres of games and employs a unique algorithm for solving the enemy-crowding problem in normal 2D shooter video games."
  }
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
                    <div className="col-md-3 col-sm-6 project_col " ><img src={card.image}  alt="img not found" className="project_image"></img></div>
                    <div className="col-md-9 col-sm-6 project_col" ><h2 className="game_name">{card.title}</h2>
            <p style={{textAlign:"justify-left",color:"white"}}>{card.copy}</p>
            <br/>
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
