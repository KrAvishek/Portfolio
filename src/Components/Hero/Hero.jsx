import React from 'react';
import './Hero.css';
import profile3 from '../../assets/profile3.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile3} alt="" className='profile-img' />
      <h1><span>I'm Kumar Abhishek, </span> full-stack developer based in India.</h1>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <a href="https://drive.google.com/file/d/1OazhuyYp_MjZnLYdjI5eyn4Sso41yyUJ/view?usp=drive_link" target="_blank" className="hero-resume">
          My resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
