import React from 'react';
import { BsArrowDown } from 'react-icons/bs'; // Import the arrow icon from react-icons library
import WebProjectThumbnail from './Thumbnail';
import '../transitions/FadeIn.css';
import '../transitions/Bounce.css';

const WebProjectContainer = () => {
  return (
    <div className="container mx-auto px-0 pt-0 flex flex-col items-center"> {/* Center the header */}
      <div className='animate-bounce-slow'>
        <h2 className="text-xl mb-6 projects-fade-in flex items-center"> {/* Add flex and items-center to align the arrow and text */}
          Featured Work
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start thumbnail-fade-in"> {/* Add md:items-start for top alignment on medium and larger screens */}
        <a href="https://mechamod.vercel.app/" target="_blank" rel="noopener noreferrer">
          <WebProjectThumbnail
            image="/web_images/Mechamod_Thumbnail.jpg"
            technologies="React, Node.js, Express.js, PostgreSQL, Three.js"
          />
        </a>
        <a href="https://www.agesrockunlimited.com/" target="_blank" rel="noopener noreferrer">
          <WebProjectThumbnail
            image="/web_images/AgesRock_Thumbnail.jpg"
            technologies="React, Tailwind"
          />
        </a>
      </div>
    </div>
  );
};

export default WebProjectContainer;