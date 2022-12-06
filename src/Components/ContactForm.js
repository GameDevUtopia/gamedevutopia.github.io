import React from 'react'
import "../Styles/ContactUs.css";
import joystick from "../images/joystick.png";
import axios from 'axios';
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/ajax/gamedevutopia@gmail.com', conFom)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    console.log(conFom)
    setFormStatus('Submitted ✔')
  }
  return (
    <section id="contactus">
    <div className="gx-0 row">
      {/* <div className="container mt-5 "> */}
      <h2 className="mb-3 contact_heading">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="_honey" className='hidden' />
        {/* <div className="mb-3"> */}
          <label className="form-label text" htmlFor="name" >
            Name
          </label>
          <input className="form-control contact_input" type="text" id="name" name="name" required   />
        {/* </div> */}
        {/* <div className="mb-3"> */}
          <label className="form-label text" htmlFor="email" >
            Email
          </label>
          <input className="form-control contact_input" type="email" id="email" name="email" required />
        {/* </div> */}
        {/* <div className="mb-3"> */}
          <label className="form-label text" htmlFor="message">
            Message
          </label>
          <textarea className="form-control contact_input" id="message" name="message" required />
        {/* </div> */}
        <button className="btn btn-warning" type="submit">
          {formStatus}
        </button>
      </form>
      
    </div>
    <div><img src={joystick} style={{width:300,height:300,marginTop:150}}></img></div>
    
    </section>
  )
}
export default ContactForm