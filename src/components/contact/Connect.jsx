import React from 'react'

function Connect(props) {
    const { sendEmail } = props
  return (
    
      <div className="container contact">
        <h2>Contact</h2>
        <form className="contact-form" onSubmit={sendEmail} method='POST' action=''>
          <div className="mb-3">
            <label htmlFor="full-name" className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Full-name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email-address"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message: </label>
            <textarea
              name="message"
              className="form-control"
              placeholder="Message"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="btn btn-light btn-lg col-12 col-md-6 col-lg-3 my-4">Send</button>
          
        </form>
      </div>
  )
}

export default Connect