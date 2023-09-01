import React from 'react'
import data from './skill-data'
import * as MiniIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'
import * as TbIcons from 'react-icons/tb'
import * as PiIcons from 'react-icons/pi'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'

function Skills() {
    return (
        <section id="skills">
            <div className="container skills">
                <div className="skills-heading">
                    <h2>My Skills</h2>
                </div>
                    <p>As a problem solver I build fullstack web applications using technology like HTML, CSS, JavaScript, React JS and MongoDB. I have highlighted some of the key technical skills that I will bring to your project.</p>
                <div className="skills-content">
                    {data.map((item, idx) => (
                        <h4 key={idx}>{ 
                            item.name === 'HTML5' ? <MiniIcons.FaHtml5 /> :
                            item.name === 'CSS3' ? <MiniIcons.FaCss3Alt /> :
                            item.name === 'ES6' ? <SiIcons.SiJavascript /> :
                            item.name === 'Sass' ? <MiniIcons.FaSass /> :
                            item.name === 'jQuery' ? <SiIcons.SiJquery /> :
                            item.name === 'React' ? <MiniIcons.FaReact /> :
                            item.name === 'React Native' ? <TbIcons.TbBrandReactNative /> :
                            item.name === 'JSX' ? <PiIcons.PiFileJsxFill /> :
                            item.name === 'Bootstrap' ? <MiniIcons.FaBootstrap /> :
                            item.name === 'Node' ? <MiniIcons.FaNodeJs /> :
                            item.name === 'Express' ? <SiIcons.SiExpress /> :
                            item.name === 'MongoDB' ? <SiIcons.SiMongodb /> :
                            item.name === 'Mongoose' ? <SiIcons.SiMongoose /> :
                            item.name === 'APIs' ? <AiIcons.AiFillApi /> :
                            item.name === 'GitHub' ? <MiniIcons.FaGithub /> :
                            item.name === 'Bitbucket' ? <MiniIcons.FaBitbucket /> :
                            item.name === 'Postman' ? <SiIcons.SiPostman /> :
                            item.name === 'JSON' ? <SiIcons.SiJson /> :
                            item.name === 'Figma' ? <MiniIcons.FaFigma /> :
                            item.name === 'AdobeXD' ? <SiIcons.SiAdobexd /> :
                            item.name === 'Photoshop' ? <SiIcons.SiAdobephotoshop /> :
                            item.name === 'Illustrator' ? <SiIcons.SiAdobeillustrator /> :
                            item.name === 'Slack' ? <MiniIcons.FaSlack /> :
                            item.name === 'Jira' ? <MiniIcons.FaJira /> :
                            item.name === 'Wordpress' ? <MiniIcons.FaWordpress /> :
                            item.name === 'npm' ? <MiniIcons.FaNpm /> :
                            item.name === 'Netlify' && <BiIcons.BiLogoNetlify />
                            } {item.name}</h4>
                        
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills