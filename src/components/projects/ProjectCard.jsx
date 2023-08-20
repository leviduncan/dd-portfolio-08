import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard(props) {
    const { img, title, desc, demo, git, dir } = props

    return (
        <div className={`projects-content d-flex flex-column-reverse ${dir ? 'flex-md-row-reverse' : 'flex-md-row'}  my-3`}>
            <div className="projects-content-info col-12 col-md-7 d-flex flex-column justify-content-center">
                <h4>{title}</h4>
                <p>{desc}</p>
                <div>
                    <Link to={demo} >View Demo</Link>
                    <Link to={git} >Git</Link>
                </div>
            </div>
            <div className="project-content-image  col-12 col-md-5">
                <img src={img} alt={title} />
            </div>
        </div>
    )
}

export default ProjectCard