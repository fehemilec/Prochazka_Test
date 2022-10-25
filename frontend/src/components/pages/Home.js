import React from 'react';
import '../../App.css';
/*import Cards from '../Cards';*/
import HomeCards from '../HomeCards';
import HeroSection from '../HeroSection';
import ThreePic from '../ThreePic';
import AboutUs from '../AboutUs';
import HomeImage from '../HomeImage';

function Home() {
  return (
    <>
    <HomeImage/>
    <HomeCards/>
    <HeroSection />
    <AboutUs/>
    <ThreePic/>
  </>
  );
}

export default Home;