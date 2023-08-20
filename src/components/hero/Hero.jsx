import React from 'react'

function Hero() {
    return (
        <section id="hero">
            <div className="shape-org"></div>
            <div className="container hero">
                <div className="hero-content-left">
                    <h1><div className="text-orange">Powerful</div> Frontend Development</h1>
                </div>
                <div className="hero-content-right">
                    <h4>
                        Building Engaging Front-end Experiences.
                    </h4>
                </div>
                <div>
                    <a href="#contact" className="btn btn-light btn-lg col-12 col-md-6 col-lg-3 my-4">Let's Connect</a>
                </div>
            </div>
        </section>
    )
}

export default Hero