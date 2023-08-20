import React from 'react'
import HRApp from '../../assets/hr-app.png'
import eCommApp from '../../assets/ecomm-app.png'
import recipeApp from '../../assets/recipe-app.png'
import { Link } from 'react-router-dom'
// import LuExternalLink from 'react-icons/lu'


function Projects() {
    return (
        <section id="projects">
            <div className="container projects">
                <h2>Projects</h2>
                <div className="projects-content d-flex flex-column flex-md-row my-3">
                    <div className="projects-content-info col-12 col-md-7 d-flex flex-column justify-content-center">
                        <h4>HR Management Tool</h4>
                        <p>Manage people assets - Fullstack MERN Project
                        </p>
                        <div>
                        <Link to="https://user-profile-frontend.netlify.app/" >View Demo</Link>
                        </div>
                    </div>
                    <div className="project-content-image  col-12 col-md-5">
                        <img src={HRApp} alt="HR Management App" />
                    </div>
                </div>
                <div className="projects-content d-flex flex-column flex-md-row-reverse my-3">
                    <div className="projects-content-info col-12 col-md-7 d-flex flex-column justify-content-center">
                        <h4>Electronics Online Store</h4>
                        <p>View and purchase amazing electronics - Context state
                        </p>
                        <div>
                        <Link to="https://dd-context-store-app.netlify.app/" >View Demo</Link>
                        </div>
                    </div>
                    <div className="project-content-image  col-12 col-md-5">
                        <img src={eCommApp} alt="HR Management App" />
                    </div>
                </div>
                <div className="projects-content d-flex flex-column flex-md-row my-3">
                    <div className="projects-content-info col-12 col-md-7 d-flex flex-column justify-content-center">
                        <h4>Recipe Search App</h4>
                        <p>The Recipe search app is driven by Edamam Recipe Search & Diet API
                        </p>
                        <div>
                        <Link to="https://grandmas-kitchen-2021.netlify.app/" >View Demo</Link>
                        </div>
                    </div>
                    <div className="project-content-image  col-12 col-md-5">
                        <img src={recipeApp} alt="HR Management App" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects