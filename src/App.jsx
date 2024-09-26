import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import Services from "./screen/Services";
import Resume from "./screen/Resume";
import Contact from "./screen/Contact";
import Works from "./screen/works";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />


        {/* Ajoute d'autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
