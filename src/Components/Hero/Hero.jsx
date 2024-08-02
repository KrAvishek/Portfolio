import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import profile3 from '../../assets/profile3.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Abhishek_Resume from '../../assets/Abhishek_Resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile3} alt="" className='profile-img' />
      <h1><span>I'm Kumar Abhishek,  </span> full-stack developer based in India.</h1>

      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
        <a href={Abhishek_Resume} download="Abhishek_Resume.pdf">My resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
