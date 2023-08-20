import React from 'react'
import ProjectCard from './ProjectCard'


function Projects() {

    const data = [
        {
            title: 'HR Management Tool',
            desc: 'Manage people assets - Fullstack MERN Project',
            demo: 'https://user-profile-frontend.netlify.app/',
            git: 'https://github.com/leviduncan/user-profile-frontend',
            dir: false,
            img: require('../../assets/hr-app.png'),
        },
        {
            title: 'Electronics Online Store',
            desc: 'View and purchase amazing electronics - Context state',
            demo: 'https://dd-context-store-app.netlify.app/',
            git: 'https://github.com/leviduncan/context-store-app',
            dir: true,
            img: require('../../assets/ecomm-app.png'),
        },
        {
            title: 'Recipe Search App',
            desc: 'The Recipe search app is driven by Edamam Recipe Search & Diet API',
            demo: 'https://grandmas-kitchen-2021.netlify.app/',
            git: 'https://github.com/leviduncan/grandmas-kitchen',
            dir: false,
            img: require('../../assets/recipe-app.png'),
        },
    ]

    return (
        <section id="projects">
            <div className="container projects">
                <h2>Projects</h2>
                {
                    data.map((project, idx) => {
                        return (
                            <ProjectCard
                                key={idx}
                                img={project.img}
                                title={project.title}
                                desc={project.desc}
                                demo={project.demo}
                                git={project.git}
                                dir={project.dir}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects