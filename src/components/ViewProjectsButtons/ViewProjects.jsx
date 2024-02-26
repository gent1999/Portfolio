import React from 'react';

const ViewAllProjects = () => {
  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <a href="#" className="inline-block bg-orange-600 bg-opacity-75 hover:bg-orange-800 text-white font-bold py-2 px-6 mr-2 mb-2 transition duration-300">All Web Projects</a>
          <a href="#" className="inline-block bg-purple-600 bg-opacity-75 hover:bg-purple-800 text-white font-bold py-2 px-6 mb-2 transition duration-300">All Graphic Work</a>
        </div>
      </div>
    </section>
  );
};

export default ViewAllProjects;
