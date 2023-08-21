import React from 'react'
import emailjs from '@emailjs/browser'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Contact() {

    const sendEmail = (e) => {
        e.preventDefault()
        alert('Submitted')
        emailjs.sendForm('service_9a950wf', 'template_0gto6wk', e.target, 'MMmgFp0fP4oyFylX1')
    }

    return (
        <section id="contact">
            <div className="container contact">
                <h2>Contact</h2>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="mb-3">
                        <label htmlFor="full-name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="full-name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email-address" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email-address" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message: </label>
                        <textarea type="password" className="form-control" id="message" />
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact