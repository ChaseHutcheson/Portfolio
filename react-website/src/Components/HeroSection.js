import React from 'react';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted/>
      <h1>Hello Employers!</h1>
      <p>Heres some info for you.</p>
    </div>
  );
}

export default HeroSection;