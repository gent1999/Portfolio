import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; // Import solid icon for PostgreSQL
import postgresqlIcon from '/icons/cib-postgresql.svg';
import threeJsIcon from '/icons/three-js-icon.svg';
import tailwind from '/icons/tailwind-icon.svg';
import '../styles/Thumbnail.css';

const WebProjectThumbnail = ({ image, title, technologies }) => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const handleMouseEnter = (tech) => {
    setHoveredTech(tech);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <div className="web-pictures items-center max-w-xs lg:max-w-lg rounded overflow-hidden mx-2 transition duration-300 transform hover:scale-105 relative">
      <img className="w-full shadow-lg" src={image} alt={title} />
      <div className="py-2 relative z-10"> {/* Set z-index to make sure the tooltip appears in front */}
        <div className="relative bg-gradient-to-r from-orange-800 to-white-400">
        {hoveredTech && (
            <div className="message absolute fade-in bg-black text-white p-2 rounded-md text-sm bottom-11 ml-1 opacity-100 pointer-events-auto transition-opacity duration-300 z-20"> {/* Ensure the tooltip appears in front */}
              <span className="">{hoveredTech}</span>
            </div>
          )}
          <div className="text-2xl mb-0 ml-3 text-white">{title}</div>
          <p className="text-white text-sm py-1 ml-3">
            {technologies.includes('React') && (
              <FontAwesomeIcon
                icon={faReact}
                className="inline-block ml-0 tech-icon"
                style={{ width: '20px', height: '20px' }}
                onMouseEnter={() => handleMouseEnter('React')}
                onMouseLeave={handleMouseLeave}
              />
            )}
            {technologies.includes('Node.js') && (
              <FontAwesomeIcon
                icon={faNode}
                className="inline-block ml-2 tech-icon"
                style={{ width: '20px', height: '20px' }}
                onMouseEnter={() => handleMouseEnter('Node.js')}
                onMouseLeave={handleMouseLeave}
              />
            )}
            {technologies.includes('Express.js') && (
              <FontAwesomeIcon
                icon={faJsSquare}
                className="inline-block ml-2 tech-icon"
                style={{ width: '20px', height: '20px' }}
                onMouseEnter={() => handleMouseEnter('Express.js')}
                onMouseLeave={handleMouseLeave}
              />
            )}
            {technologies.includes('PostgreSQL') && (
              <img
                src={postgresqlIcon}
                alt="PostgreSQL"
                className="inline-block ml-2 tech-icon"
                style={{ position: 'relative', top: '-4px', width: '20px', filter: 'invert(1)' }}
                onMouseEnter={() => handleMouseEnter('PostgreSQL')}
                onMouseLeave={handleMouseLeave}
              />
            )}
            {technologies.includes('Three.js') && (
              <img
                src={threeJsIcon}
                alt="Three.js"
                className="inline-block ml-2 tech-icon"
                style={{ position: 'relative', top: '-4px', width: '20px' }}
                onMouseEnter={() => handleMouseEnter('Three.js')}
                onMouseLeave={handleMouseLeave}
              />
            )}
            {technologies.includes('Tailwind') && (
              <img
                src={tailwind}
                alt="Tailwind"
                className="inline-block ml-2 tech-icon"
                style={{ position: 'relative', top: '-6px', width: '20px', filter: 'invert(1)' }}
                onMouseEnter={() => handleMouseEnter('Tailwind CSS')}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebProjectThumbnail;
