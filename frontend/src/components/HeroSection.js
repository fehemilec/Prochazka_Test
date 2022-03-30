import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <image/>
      
      <h1>Žaluzie Procházka</h1>
      <p>Využijte naší jedinečné nabídky</p>
    </div>
  );
}

export default HeroSection;
