import React from 'react'

function Hero() {
    return (
        <section id="hero">
            <div className="shape-org"></div>
            <div className="container hero">
                <div className="hero-content-left">
                    <div className="text-orange">Darrin Duncan</div> 
                    <h1>Frontend Developer</h1>
                </div>
                <div className="hero-content-right">
                    <h4>
                        Passionate Front-End Developer dedicated to crafting immersive digital experiences. I blend creativity with cutting-edge technologies to shape user-friendly websites that captivate, engage, and leave a lasting impression. Let's turn your vision into a seamless online reality.
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