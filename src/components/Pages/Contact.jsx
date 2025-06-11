import React, { useState, useToast } from "react";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    e.preventDefault();
    
    const formData = event.target;

    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: new URLSearchParams(new FormData(form)).toString(),
    // })
    //   .then(() => {
    //     alert("Message sent successfully!");
    //     setFormData({ username: "", email: "", message: "" });
    //   })
    //   .catch((error) => alert(error));
    
    if (!formData.username || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    console.log("Submitting contact form:", formData);

    try {
      const response = await fetch('https://deepak-01.app.n8n.cloud/webhook/contact-deepak', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. I'll get back to you soon!",
        });
        
        // Reset form
        setFormData({
          username: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form
          name="contact-form"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="form"
        >
          {/* Hidden fields for Netlify */}
          <input type="hidden" name="form-name" value="contact-form" />
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
  );
};

export default ContactComponent;
