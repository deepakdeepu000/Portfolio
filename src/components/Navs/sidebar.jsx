import React, { useState } from 'react';

const SideBar = () => {
    const [isSidebarActive, setSidebarActive] = useState(false);
    const [isContactVisible, setContactVisible] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarActive(!isSidebarActive);
    };

    const handleContactToggle = () => {
        setContactVisible(!isContactVisible);
    };


    const ContactLinks = [
        {
            label : "Email",
            icon : <ion-icon name="mail-outline"></ion-icon>,
            content :  <a href="mailto:deepakpampana2003@gmail.com" className="contact-link">deepakpampana2003@gmail.com</a>
        },
        {
            label : "Phone",
            icon : <ion-icon name="phone-portrait-outline"></ion-icon>,
            content :  <a href="tel:+919581460116" className="contact-link">+91 9581460116</a>
        },
        {
            label : "Birthday",
            icon : <ion-icon name="calendar-outline"></ion-icon>,
            content : <time dateTime="2004-08-05">5 August, 2004</time>
        },
        {
            label : "Location",
            icon : <ion-icon name="location-outline"></ion-icon>,
            content : <address>Rajahmundry, India</address>
        }
    ]

    return (
        <aside className={`sidebar ${isContactVisible? 'active' : ''}`}
        >
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src="./assets/images/photo.png" alt="Om Kharche" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Om Kharche">Om Kharche</h1>
                    <p className="title">Full Stack Developer</p>
                </div>
                <button className="info_more-btn"  onClick={handleContactToggle}>
                    <span>{isContactVisible ? 'Hide Contacts' : 'Show Contacts'}</span>
                    <ion-icon name={isContactVisible ? "chevron-up" : "chevron-down"}></ion-icon>
                </button>
            </div>

            { (!isSidebarActive || isContactVisible) && (
                <div className="sidebar-info_more">
                    <div className="separator"></div>
                    <ul className="contacts-list">

                    {ContactLinks.map((contact, index) => (
                            <li className="contact-item" key={index}>
                                <div className="icon-box">
                                    {contact.icon}
                                </div>
                                <div className="contact-info">
                                    <p className="contact-title">{contact.label}</p>
                                    {contact.content}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="separator"></div>
                    <ul className="social-list">
                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </div>

                
            )}
        </aside>
    );
};

export default SideBar;



{/* <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Email</p>
                                <a href="mailto:deepakpampana2003@gmail.com" className="contact-link">deepakpampana2003@gmail.com</a>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="phone-portrait-outline"></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Phone</p>
                                <a href="tel:+919581460116" className="contact-link">+91 9581460116</a>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="calendar-outline"></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Birthday</p>
                                <time dateTime="2004-08-05">5 August, 2004</time>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="location-outline"></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Location</p>
                                <address>Rajahmundry, India</address>
                            </div>
                        </li>
                    </ul>
                    <div className="separator"></div>
                    <ul className="social-list">
                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li> */}
