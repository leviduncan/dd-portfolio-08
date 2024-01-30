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
            Hey there! I'm a seasoned freelance Front-End Developer with a love for creating captivating and user-friendly websites. With over 7 years of experience, I enjoy weaving together the latest technologies and design trends. What drives me is maintaining design integrity and ensuring that users across different devices have the best experience possible. My toolkit includes HTML/CSS, JavaScript (especially React.js), responsive design, version control, and more. Let's chat about bringing your ideas to life in the digital world!
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