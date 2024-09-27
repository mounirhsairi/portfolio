import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./styles.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        sujet: '',
        commentaire: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.send('service_jss7eo8', 'template_m26jhbb', formData, 'T2Y80eaZraA8XqkB1')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                // Vous pouvez également réinitialiser le formulaire ou afficher un message de succès ici
                setFormData({
                    nom: '',
                    prenom: '',
                    email: '',
                    telephone: '',
                    sujet: '',
                    commentaire: '',
                });
            })
            .catch((err) => {
                console.error('Failed to send email:', err);
                // Afficher un message d'erreur si nécessaire
            });
    };

    return (
        <div className='bodyRS'>
            <header>
                <div className="logo">Mounir<span>.</span></div>
                <nav>
                <ul className="nav-links">
                    <li><a href="/portfolio/#/">Home</a></li>
                    <li><a href="/portfolio/#/services">Services</a></li>
                    <li><a href="/portfolio/#/resume">Resume</a></li>
                    <li><a href="/portfolio/#/works">Work</a></li>
                    <li><a href="/portfolio/#/contact">Contact</a></li>
                </ul>
                </nav>
            </header>

            <section className="container">
                <div className="formContainer">
                    <h2>Let's Work Together</h2>
                    <p>Need help with your project? I’m here to offer my expertise and deliver top-notch results.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="nom" placeholder="Firstname" value={formData.nom} onChange={handleChange} required />
                            <input type="text" name="prenom" placeholder="Lastname" value={formData.prenom} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required />
                            <input type="tel" name="telephone" placeholder="Phone Number" value={formData.telephone} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <select name="sujet" value={formData.sujet} onChange={handleChange} required>
                                <option value="">Select a service</option>
                                <option value="Développement Web">Développement Web</option>
                                <option value="Développement Mobile">Développement Mobile</option>
                                <option value="Optimisation SEO">Optimisation SEO</option>
                                <option value="Web Scraping">Web Scraping</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea name="commentaire" placeholder="Type your message here" value={formData.commentaire} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>

                <div className="informations">
                    <div className="contact-info">
                        <i className="fas fa-phone"></i>
                        <div className="contact-details">
                            <h2>Phone Number</h2>
                            <p>(+216) 20840446</p>
                        </div>
                    </div>
                    <div className="contact-info">
                        <i className="fas fa-envelope"></i>
                        <div className="contact-details">
                            <h2>Email address</h2>
                            <p>hsairi34@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-info">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="contact-details">
                            <h2>Address</h2>
                            <p>Tunis, Ariana</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
