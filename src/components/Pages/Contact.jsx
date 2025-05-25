import React, { useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';

const ContactComponent = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
            e.preventDefault();

            const form = e.target;
            const formData = new FormData(form);

            try {
                await fetch('/', {
                method: 'POST',
                body: formData,
                });


            alert('Message sent successfully!');
            
            // Optional: Reset your local form state
            setFormData({ username: '', email: '', message: '' });
        
            
     } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send the message. Please try again later.');
        }
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
                    name="contact" 
                    method="POST" 
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field" 
                    onSubmit={handleSubmit} 
                    className="form"
                    >
                    {/* Hidden fields for Netlify */}
                    <input type="hidden" name="form-name" value="contact" />
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