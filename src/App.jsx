import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Blob from './components/Blob/Blob';
import WebProjects from './components/WebProjects/LandingContainer';
import GraphicsLanding from './components/GraphicProjects/LandingContainer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <WebProjects />
      <GraphicsLanding />
      <Blob />
    </div>
  );
}

export default App;