import React from 'react'
import { FaHamburger } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/"><div className="logo">D</div></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FaHamburger />
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex align-items-center justify-content-between">
                            <li className="nav-item"><Link className="nav-link" to="#about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#skills">Skills</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#projects">Projects</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar