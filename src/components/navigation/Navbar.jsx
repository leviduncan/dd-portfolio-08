import React from 'react'
import { FaHamburger } from 'react-icons/fa'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                <a className="navbar-brand" href="/"><div className="logo">D</div></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <FaHamburger className="p3" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                        <span className="navbar-text">
                        <ul className="navbar-nav d-flex align-items-center justify-content-between">
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar