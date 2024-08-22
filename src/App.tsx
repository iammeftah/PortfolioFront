import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';  // Add this line

import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutPortfolio from './pages/AboutPortfolio';

// Initialize AOS
AOS.init();



const App: React.FC = () => {

  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutPortfolio" element={<AboutPortfolio />} />
          </Routes>
        </div>
      </Router>


  );
};

export default App;