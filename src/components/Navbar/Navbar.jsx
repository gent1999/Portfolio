import React from 'react';
import '../transitions/FadeIn.css'

const Navbar = () => {
  return (
    <nav className="bg-transparent py-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* <div className="text-white font-bold text-xl">My Portfolio</div> */}
          <ul className="flex flex-grow justify-center" style={{ fontSize: '1.1rem' }}>
            <li className="mr-6 navbar-fade-in">
              <a href="#web-projects" className="text-white hover:text-gray-400">Web Projects</a>
            </li>
            <li className="navbar-fade-in">
              <a href="#graphic-design" className="text-white hover:text-gray-400">Graphic Design</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
