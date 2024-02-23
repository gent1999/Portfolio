import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import postgresqlIcon from '/icons/cib-postgresql.svg';
import threeJsIcon from '/icons/three-js-icon.svg';
import tailwind from '/icons/tailwind-icon.svg';
import '../styles/Thumbnail.css';

const WebProjectThumbnail = ({ image, title, technologies }) => {
  return (
    <div className="web-pictures items-center max-w-xs lg:max-w-lg rounded overflow-hidden mx-2 transition duration-300 transform hover:scale-105 relative">
      <img className="w-full shadow-lg" src={image} alt={title} />
      <div className="py-2 relative">
        <div className="relative bg-gradient-to-r from-orange-800 to-white-400">
          <div className="text-2xl mb-0 ml-3 text-white">{title}</div>
          <p className="text-white text-sm py-1 ml-3">
            {technologies.includes('React') && <FontAwesomeIcon icon={faReact} className="inline-block ml-0" style={{ width: '20px', height: '20px'}} />}
            {technologies.includes('Node.js') && <FontAwesomeIcon icon={faNode} className="inline-block ml-2" style={{ width: '20px', height: '20px'}} />}
            {technologies.includes('Express.js') && <FontAwesomeIcon icon={faJsSquare} className="inline-block ml-2" style={{ width: '20px', height: '20px'}} />}
            {technologies.includes('PostgreSQL') &&
              <img
                src={postgresqlIcon}
                alt="PostgreSQL"
                className="inline-block ml-2"
                style={{ position: 'relative', top: '-4px', width: '19px', filter: 'invert(1)' }} // Adjust position, size, and color
              />
            }
            {technologies.includes('Three.js') &&
              <img
                src={threeJsIcon}
                alt="Three.js"
                className="inline-block ml-2"
                style={{ position: 'relative', top: '-4px', width: '20px' }} // Adjust position and size
              />
            }
            {technologies.includes('Tailwind') &&
              <img
                src={tailwind}
                alt="Tailwind"
                className="inline-block ml-2"
                style={{ position: 'relative', top: '-6px', width: '20px', filter: 'invert(1)' }} // Adjust position and size
              />
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebProjectThumbnail;
