import React, { useState } from "react";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        return alert("Message sent successfully!");
      })
      .catch((error) => alert(error));

    // Reset form fields after submission
    setFormData({
      username: "",
      email: "",
      message: "",
    });

    document.querySelector("form").addEventListener("submit", handleSubmit);
  };

  return (
    <>
      <article className="contact active" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>

        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>

          <form
            name="contact-form"
            method="POST"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="form"
            netlify
          >
            {/* Hidden fields for Netlify */}
            <input type="hidden" name="contact-form" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="input-wrapper">
              <input
                type="text"
                name="username"
                className="form-input"
                placeholder="Full name"
                value={formData.username}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button className="form-btn" type="submit">
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </article>
    </>
  );
};

export default ContactComponent;
