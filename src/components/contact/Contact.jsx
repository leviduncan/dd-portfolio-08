import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Connect from './Connect'
import Thanks from './Thanks'

const Contact = () => {
const [connect, setConnect] = useState(true)
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_884rtdb',
      'template_0gto6wk',
      e.target,
      'MMmgFp0fP4oyFylX1'
    ).then(res => {
      console.log(res)
      setConnect(false)
      console.log(connect)
    }).catch(err => console.log(err))
  }

  return (
    <>
      {connect ? <Connect sendEmail={sendEmail} /> : <Thanks />}
    </>
    
  )
}

export default Contact