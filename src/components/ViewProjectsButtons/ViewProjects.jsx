import React from 'react';
import './ViewProjects.css'

const ViewAllProjects = () => {
  return (
    <section className="py-8 bg-transparent">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <button className="btn btn-gradient mb-4 md:mb-0 md:mr-4">View All Web Projects</button>
          <button className="btn btn-gradient">View All Graphic Projects</button>
        </div>
      </div>
    </section>
  );
};

export default ViewAllProjects;
