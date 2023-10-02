import React from 'react'
import Darrin from '../../assets/darrinPhoto.png'
import * as Connect from 'react-icons/fa'
import * as AiConnect from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
    <div className="container about">
        <div className="about-heading text-center">
            <h2>Hi, I'm Darrin Duncan</h2>
            <h3>Your Super Frontend Developer</h3>
        </div>
        <div className="about-content d-flex mx-auto mt-4 flex-column">

            <div className="about-content-left col-12 col-md-7 mx-auto my-4">
                <img src={Darrin} alt="About Darrin" />
                <div className="circle"></div>
            </div>
            <div className="about-content-right col-12 col-md-8 mx-auto mx-md-6">
            <p>
            I am a seasoned freelance Front-End Development Professional with over 7 years of experience. Specializing in crafting captivating and user-friendly websites and applications, I excel in leveraging cutting-edge technologies and design trends. My commitment to maintaining design integrity and optimizing user experiences across various devices showcases my dedication to delivering high-quality solutions. My versatile skill set encompasses HTML/CSS, JavaScript (including React.js), responsive design, version control, and more, making me a valuable asset in web development.
            </p>
                  </div>
                  <div className="reach-out">
                    <a className="alink" href="https://github.com/leviduncan" target="_blank"><Connect.FaGithub /></a>
                      
                      <a className="alink" href="https://www.linkedin.com/in/darrinduncan/" target="_blank"><Connect.FaLinkedin /></a>
                      <a className="alink" href="mailto:darrin@darrinduncan.com" target="_blank"><AiConnect.AiOutlineMail /></a>
                  </div>
        </div>
    </div>
</section>
  )
}

export default About