import React, { useState } from "react";
import "./styles.css";
import { color } from "three/examples/jsm/nodes/Nodes.js";

const projects = [
    {
        id: 1,
        title: "FormaTrack - Training Management Platform",
        description: "FormaTrack is an integrated platform developed for the company Marquardt, designed to optimize the training management process. In response to a traditional system that is lengthy and complex, FormaTrack streamlines the management of training requests, the organization of sessions, and the evaluation of employee skills. This centralized solution enhances the efficiency of professional development processes, while meeting the growing training needs within the company.",
        technologies: "Java, Spring Boot, Angular, MySQL",
        image: "images/Marquardt.png",
    },
    {
        id: 2,
        title: "Tarot Website",
        description: "This project involves creating a website dedicated to tarot, developed with WordPress. The site offers online tarot consultations, allowing users to book sessions with professional tarot readers. I used a custom theme and plugins such as WooCommerce to manage bookings and payments. The platform is designed to be intuitive, with informative pages on different types of tarot readings, customer testimonials, and a blog featuring articles on tarot and spirituality. The user experience has been optimized to be accessible on all devices.",
        technologies: "WordPress, WooCommerce, Elementor",
        image: "images/Tarot.png",
    },
    {
        id: 3,
        title: "Web Scraping and BI Dashboard",
        description: "This project involves collecting data from social platforms such as YouTube, Facebook, and Instagram using web scraping techniques. The extracted data includes information about users, posts, and trends. To visualize this data, I developed an interactive BI dashboard, allowing users to explore insights and analyze the performance of content across different platforms. This solution provides a clear overview of social data, facilitating informed decision-making regarding content strategy.",
        technologies: "Python, Selenium, Pandas, Power BI",
        image: "images/BI.png",
    },
    {
        id: 4,
        title: "Mobile Applications for Store and Customer",
        description: "Development of two mobile applications using Expo and Firebase. The store application enables the management of products, orders, and customers, thus facilitating sales management. The customer application offers an intuitive shopping experience, allowing users to browse products, place orders, and manage their purchase history. These applications are designed to improve business operation efficiency while providing a pleasant and responsive user interface.",
        technologies: "React Native, Expo, Firebase",
        image: "images/image.png",
    },
];

      


const Works = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="bodyRS">
      <header>
        <div className="logo">
          Mounir<span>.</span>
        </div>
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
      <div className="work-section">
        <div className="project-details">
          {/* Numéro du projet */}
          <div className="number">{currentProject.id.toString().padStart(2, '0')}</div>
          <h1>{currentProject.title}</h1>
          <p>{currentProject.description}</p>
          {/* Affichage des technologies */}
          <div className="technologies">
            {currentProject.technologies.split(", ").map((tech, index) => (
              <span key={index} className="technology">
                {tech}
              </span>
            ))}
          </div>
         {/*<div className="buttons">
            <button>Live Demo</button>
            <button>GitHub</button>
          </div>*/} 
        </div>
        <div className="project-image">
          <img src={currentProject.image} alt={currentProject.title} />
          <div className="image-navigation">
            <button onClick={handlePrevProject}>{`<`}</button>
            <button onClick={handleNextProject}>{`>`}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
