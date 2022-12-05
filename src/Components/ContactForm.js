import React from 'react'
import "../Styles/ContactUs.css";
import joystick from "../images/joystick.png";
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
    console.log(conFom)
  }
  return (
    <section id="contactus">
    <div class="row">
      <div class="col-md-6"><div className="container mt-5 ">
      <h2 className="mb-3 contact_heading">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label text" htmlFor="name" >
            Name
          </label>
          <input className="form-control contact_input" type="text" id="name" required   />
        </div>
        <div className="mb-3">
          <label className="form-label text" htmlFor="email" >
            Email
          </label>
          <input className="form-control contact_input" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label text" htmlFor="message">
            Message
          </label>
          <textarea className="form-control contact_input" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div></div>
      <div class="col-md-6"><img src={joystick} style={{width:300,height:300,marginTop:150}}></img></div>
    </div>
    
    </section>
  )
}
export default ContactForm