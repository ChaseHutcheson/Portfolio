import React from 'react'
import '../App.js'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='react-website\public\videos\video-1.mp4' autoPlay loop muted />
        <h1>Hello Employers!</h1>
        <p>Heres all the info about me.</p>
    </div>
  )
}

export default HeroSection