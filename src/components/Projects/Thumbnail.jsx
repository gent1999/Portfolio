import React from 'react';

const ProjectThumbnail = ({ image, title, description, technologies }) => {
  return (
    <div className="max-w-lg rounded overflow-hidden mx-4 transition duration-300 transform hover:scale-105">
      <img className="w-full shadow-lg" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 bg-white text-sm mb-2"><span className="font-bold">Technologies Used:</span> {technologies}</p>
        <p className="text-gray-700 bg-white text-base mb-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
