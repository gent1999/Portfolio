import React, { useState, useEffect } from 'react';
import './Blob.css';
import '../transitions/FadeIn.css';
import CityImage from '/images/City.jpg';
import CityMobileImage from '/images/City_Mobile.jpg';
import CityTabletImage from '/images/City_Tablet.jpg';

const Blob = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const cursor = document.querySelector('.blob');

    const handleMouseMove = (e) => {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="blob"></div>
      <img
        className="image image-fade-in"
        src={windowWidth <= 1000 ? (windowWidth <= 600 ? CityMobileImage : CityTabletImage) : CityImage}
        alt="Background"
      />
    </div>
  );
};

export default Blob;
