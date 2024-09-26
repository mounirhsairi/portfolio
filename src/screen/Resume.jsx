import React from "react";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "../components/Experience";
import { UI } from "../components/UI";
const Resume =()=>{
    return (
        <div className="bodyRS">
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
      <div  className="container">
      <>
      <UI></UI>
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </>
    </div>
    </div>
  );


};
export default  Resume;
