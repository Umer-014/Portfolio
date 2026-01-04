import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/home";
import About from "../Pages/About/about";
import Skills from "../Pages/Skills/skills";
import Projects from "../Pages/Projects/projects";
import CV from "../Pages/CV/cv";
import Contact from "../Pages/Contact/contact";

const Stack = () => {
  return (
    <Router>
      <ScrollToTop />
      <LiveChat />
      <Routes>
        {/* Route Definitions */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Stack;
