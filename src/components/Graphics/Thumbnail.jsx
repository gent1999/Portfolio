import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import photoshopIcon from '/icons/cib-adobe-photoshop.svg';
import '../styles/Thumbnail.css';

const GraphicProjectThumbnail = ({ image, title }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Adjust the threshold as needed
  });

  const [hoveredPhotoshop, setHoveredPhotoshop] = useState(false);

  const handleMouseEnter = () => {
    setHoveredPhotoshop(true);
  };

  const handleMouseLeave = () => {
    setHoveredPhotoshop(false);
  };

  return (
    <div
      ref={ref}
      className={`pictures max-w-xs rounded overflow-hidden mx-2 my-4 transition duration-300 transform hover:scale-105 ${inView ? 'fade-in' : 'invisible'}`}
    >
      {hoveredPhotoshop && (
        <div className="message absolute fade-in bg-black text-white p-2 rounded-md text-sm bottom-11 mb-4 ml-1 opacity-100 pointer-events-auto transition-opacity duration-300 z-20">
          {title}
        </div>
      )}
      <img className="w-full shadow-lg" src={image} alt={title} />
      <div className="px-6 py-4 relative">
        {title !== 'Photoshop' && (
          <div className="text-xl mb-0 mt-2 relative z-10">{title}</div>
        )}
        <div className="absolute top-0 left-0 mt-2 w-full h-8 bg-gradient-to-r from-purple-800 to-white-400"></div>
        {title === 'Photoshop' && (
          <img
            src={photoshopIcon}
            alt="Photoshop"
            className="inline-block"
            style={{ position: 'relative', top: '-7px', left: '-12px', width: '20px', filter: 'invert(1)' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </div>
    </div>
  );
};

export default GraphicProjectThumbnail;
