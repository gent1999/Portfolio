import React from 'react';
import { BsArrowDown } from 'react-icons/bs'; // Import the arrow icon from react-icons library
import ProjectThumbnail from './Thumbnail';
import '../transitions/FadeIn.css';

const Home = () => {
  return (
    <div className="container mx-auto px-4 pt-10 flex flex-col items-center"> {/* Center the header */}
      <h2 className="text-xl mb-6 projects-fade-in flex items-center"> {/* Add flex and items-center to align the arrow and text */}
        <BsArrowDown className="mr-2 animate-bounce" />
        Featured Projects
        <BsArrowDown className="ml-2 animate-bounce" /> {/* Add the arrow icon with some left margin and animate-bounce class */}
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start thumbnail-fade-in"> {/* Add md:items-start for top alignment on medium and larger screens */}
        <a href="https://mechamod.vercel.app/" target="_blank" rel="noopener noreferrer">
          <ProjectThumbnail
            image="/images/Mechamod_Thumbnail.jpg"
            title="Mechamod"
            description="Discover artisan keycaps that elevate your keyboard with quality craftsmanship and unique designs. Our user-friendly website lets you explore the collection in immersive 3D."
            technologies="React, Node.js, Express.js, PostgreSQL, Three.js"
          />
        </a>
        <a href="https://www.agesrockunlimited.com/" target="_blank" rel="noopener noreferrer">
          <ProjectThumbnail
            image="/images/AgesRock_Thumbnail.jpg"
            title="Ages Rock"
            description="Description for Ages Rock project."
            technologies="React"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
