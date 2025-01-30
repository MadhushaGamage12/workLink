import React from "react";
import '../styles/styles.css';


function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! Thank you for reaching out.");
  };

  return (
    <section className="contact-section">
      <h1>Contact</h1>
      <p>Feel free to reach out to me for any questions or opportunities!</p>
      <div className="form-container">
        <h2>Email Me</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
