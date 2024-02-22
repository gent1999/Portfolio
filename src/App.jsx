import React from 'react';
import LandingNavbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Blob from './components/Blob/Blob';
import WebProjects from './components/Websites/LandingContainer';
import GraphicsLanding from './components/Graphics/LandingContainer';
import ViewAllProjects from './components/ViewProjectsButtons/ViewProjects';

function App() {
  return (
    <div>
      <LandingNavbar />
      <Header />
      <WebProjects />
      <GraphicsLanding />
      <Blob />
    </div>
  );
}

export default App;