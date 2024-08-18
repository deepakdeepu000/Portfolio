import React, { useState } from 'react';
import axios from 'axios';

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
        console.log(formData); 

        try {
            const response = await axios.post('https://wabajpdxhe.execute-api.us-east-1.amazonaws.com/message-receiver/api/getMessage', formData);
            if (response.status === 200) {
                alert('Message sent successfully!');
                setFormData({ username: '', email: '', message: '' });
            }
        } catch (error) {
            alert('Failed to send the message. Please try again later.');
        }
    };

    return (
        <>
            <article className="contact active" data-page="contact">
                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>

                <section className="mapbox" data-mapbox>
                    <figure>
                    </figure>
                </section>

                <section className="contact-form">
                    <h3 className="h3 form-title">Contact Form</h3>

                    <form onSubmit={handleSubmit} className="form">
                        <div className="input-wrapper">
                            <input 
                                type="text"     
                                name="username"  // Updated name attribute to match state
                                className="form-input" // Fixed class attribute
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
