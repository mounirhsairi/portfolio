import React from "react";
import "./styles.css"; // Make sure to have your styles here

const Services = () => {
  return (
    <div className="bodyRS">
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
          {/*<a href="#" className="hire-me-btn">Hire me</a>*/}
        </nav>
      </header>

      <div className="container">
        <section className="services">
          <div className="service-item">
            <h2 className="number">01</h2>
            <h3>Web Development</h3>
            <p>Creating responsive and dynamic websites tailored to your needs, using the latest technologies to provide an optimal user experience.</p>
            <div className="border"></div>
          </div>
          <div className="service-item">
            <h2 className="number">02</h2>
            <h3>Web Scraping</h3>
            <p>Extracting valuable data from websites, enabling analysis of information from different sources for market research or in-depth studies.</p>
            <div className="border"></div>
          </div>
          <div className="service-item">
            <h2 className="number">03</h2>
            <h3>Mobile Development</h3>
            <p>Creating high-performance mobile applications for iOS and Android, designed to provide a smooth user experience and meet the specific needs of your project.</p>
            <div className="border"></div>
          </div>
          <div className="service-item">
            <h2 className="number">04</h2>
            <h3>SEO Optimization</h3>
            <p>Improving your website's visibility on search engines through effective SEO techniques, thereby increasing organic traffic.</p>
            <div className="border"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
