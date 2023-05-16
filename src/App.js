import React from 'react';
import HeroSection from './components/HeroSection';
import Search from './components/Search';
import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';

function App() {
  
  return (
    <div className="App">
        <NavBar />
        <HeroSection />
        <Search />
        <AboutUs />

    </div> 
  );
}

export default App;
