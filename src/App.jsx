import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./screen/Home";
import Services from "./screen/Services";
import Resume from "./screen/Resume";
import Contact from "./screen/Contact";
import Works from "./screen/works";



function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Router>
  );
}

export default App;
