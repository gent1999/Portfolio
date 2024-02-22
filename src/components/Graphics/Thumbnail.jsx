import React from 'react';
import { useInView } from 'react-intersection-observer';
import photoshopIcon from '/icons/cib-adobe-photoshop.svg';
import '../styles/Thumbnail.css';

const GraphicProjectThumbnail = ({ image, title }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Adjust the threshold as needed
  });

  return (
    <div ref={ref} className={`pictures max-w-xs rounded overflow-hidden mx-2 my-4 transition duration-300 transform hover:scale-105 ${inView ? 'fade-in' : 'invisible'}`}>
      <img className="w-full shadow-lg" src={image} alt={title} />
      <div className="px-6 py-4 relative">
        {title !== 'Photoshop' && // Render the title if it's not "Photoshop"
          <div className="text-xl mb-0 mt-2 relative z-10">{title}</div>
        }
        <div className="absolute top-0 left-0 mt-2 w-full h-full bg-gradient-to-r from-purple-800 to-white-400"></div>
        {title === 'Photoshop' && // Conditionally render the Photoshop icon
          <img src={photoshopIcon} alt="Photoshop" className="inline-block" style={{ position: 'relative', top: '4px', left: '-12px', width: '27px', filter: 'invert(1)'  }} />
        }
      </div>
    </div>
  );
}

export default GraphicProjectThumbnail;
