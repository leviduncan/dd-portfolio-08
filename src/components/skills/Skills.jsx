import React from 'react'
import data from './skill-data'
import { FaHtml5 } from 'react-icons/fa'

function Skills() {
    
    const skillset = () => {

    }

    return (
        <section id="skills">
            
            <div className="container skills">
                <div className="skills-heading">
                    <h2>My Skills</h2>
                </div>
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