import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import profile3 from '../../assets/profile3.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        {/* <div className="about-left">
            <img src={profile3} alt="" />
        </div> */}
        <div className="about-right">
            <div className="about-para">
            <p>I bridge the realms of frontend elegance and backend functionality, crafting seamless digital experiences.</p>
            <p>From pixel-perfect designs to robust server-side solutions, I bring ideas to life across the full stack of web development.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
           
                <div className="about-skill"><p>DBMS</p><hr style={{width:"75%"}} /></div>
                <div className="about-skill"><p>PostgreSQL , MySQL</p><hr style={{width:"65%"}} /></div>
                <div className="about-skill"><p>Computer Networks</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Frameworks:Bootstrap, NodeJS, ExpressJS , ReactJS , NextJS</p><hr style={{width:"20%"}} /></div>

                {/* <div className="about-skill"><p>Frameworks:Bootstrap, NodeJS, ExpressJS , ReactJS</p><hr style={{width:"50%"}} /></div> */}
                
                <div className="about-skill"><p>Operating System</p><hr style={{width:"62%"}} /></div>
                
                <div className="about-skill"><p>AWS</p><hr style={{width:"69%"}} /></div>
                <div className="about-skill"><p>Object Oriented Programming</p><hr style={{width:"64%"}} /></div>
                <div className="about-skill"><p>Coding Languages: JAVA,JavaScript,Python</p><hr style={{width:"58%"}} /></div>
            </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default About
