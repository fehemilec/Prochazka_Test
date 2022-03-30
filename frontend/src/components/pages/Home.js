import React from 'react';
import '../../App.css';
/*import Cards from '../Cards';*/
import Slider from '../Slider';
import HomeCards from '../HomeCards';
import HeroSection from '../HeroSection';
import ThreePic from '../ThreePic';
import AboutUs from '../AboutUs';
function Home() {
  return (
    <>
      <Slider/>
      <HomeCards/>
      <HeroSection />
      <ThreePic/>
      <AboutUs/>
    </>
  );
}

export default Home;