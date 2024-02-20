import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Blob from './components/Blob/Blob';
import Projects from './components/Projects/Container';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Blob />
    </div>
  );
}

export default App;