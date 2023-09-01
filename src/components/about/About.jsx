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
            <h3>A Super Frontend Developer</h3>
        </div>
        <div className="about-content d-flex mx-auto mt-4 flex-column">

            <div className="about-content-left col-12 col-md-7 mx-auto my-4">
                <img src={Darrin} alt="About Darrin" />
                <div className="circle"></div>
            </div>
            <div className="about-content-right col-12 col-md-8 mx-auto mx-md-6">
            <p>
            As a Web Developer, I often gather, define and interpret business requirements, to design, build, enhance, test, and deploy modern web applications. I use code to solve problems. Whether working independently or within a team setting, I am able to juggle multiple projects while managing quality, communication, and creativity. I am always available to chat with you about your next project or current one. So let's connect! I look forward to speaking with you.
            </p>
                  </div>
                  <div className="reach-out">
                      <Connect.FaGithub />
                      <Connect.FaLinkedin />
                      <AiConnect.AiOutlineMail />
                  </div>
        </div>
    </div>
</section>
  )
}

export default About