import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <div className="body">
      <header>
        <div className="logo">
          Mounir<span>.</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/works">Work</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          {/*<a href="#" className="hire-me-btn">Hire me</a>*/}
        </nav>
      </header>

      <section className="intro-section">
        <div className="intro-text">
          <h3>Software Engineer</h3>
          <h1>
            Hello, I'm <span>Mounir Hsairi</span>
          </h1>
          <p>
          I specialize in creating seamless and engaging digital experiences, leveraging a diverse set of programming languages and technologies to deliver innovative solutions.
        </p>

          <div className="btn-social-container">
            <a href="public/cv-mounir-hsairi.pdf" className="btn">Download CV</a>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/mounir-hsairi-a3b18a221/"><img src="public/images/linkedin.png" alt="LinkedIn Profile" /></a>
              <a href="https://github.com/mounirhsairi"><img src="public/images/github.png" alt="GitHub Profile" /></a>
            </div>
          </div>
        </div>
        <div className="intro-image">
          <div className="profile-container">
            <img
              src="public/images/profil.png"
              alt="Profile Picture"
              className="profile-image"
            />
            <div className="circle"></div>
          </div>
        </div>
      </section>

      {/*<section className="stats-section">
        <div className="stats">
          <div>
            <h2>1</h2>
            <p>Year of experience</p>
          </div>
          <div>
            <h2>10</h2>
            <p>Projects completed</p>
          </div>
          <div>
            <h2>7</h2>
            <p>Technologies mastered</p>
          </div>
          <div>
            <h2>443</h2>
            <p>Code commits</p>
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default Home;
