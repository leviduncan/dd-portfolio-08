import React from 'react'
import data from './skill-data'

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
                        <h4 key={idx}>{item.name}</h4>
                        
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills