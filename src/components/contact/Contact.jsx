import React from "react";
import './Contact.css'

function Contact({id}) {
  return (
    <section className="contact-section" id={id}>
      <h1 className="contact-heading">Contact Me</h1>
      <div className="contact-container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xwkjpjqw" method="POST" className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="Off"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Message"
              autoComplete="off"
              required
            />
            <input type="submit" id="submitBtn" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
