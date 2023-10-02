import React from 'react'
import * as Connect from 'react-icons/fa'

function ProjectCard(props) {
    const { img, title, desc, demo, git, dir } = props

    return (
        <div className={`projects-content d-flex flex-column-reverse ${dir ? 'flex-md-row-reverse' : 'flex-md-row'}  my-3`}>
            <div className="projects-content-info col-12 col-md-7 d-flex flex-column justify-content-center">
                <h4>{title}</h4>
                <p>{desc}</p>
                <div>
                    <a className="alink" href={demo} target="_blank"><Connect.FaExternalLinkAlt /></a>
                    <a className="alink" href={git} target="_blank"><Connect.FaGithub /></a>
                </div>
            </div>
            <div className="project-content-image  col-12 col-md-5">
                <img src={img} alt={title} />
            </div>
        </div>
    )
}

export default ProjectCard

