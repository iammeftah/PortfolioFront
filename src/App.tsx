import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AboutPortfolio from './pages/AboutPortfolio';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();

const TitleSetter = () => {
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;
        let title = 'My Portfolio'; // Default title

        switch (pathname) {
            case '/':
                title = 'Home | My Portfolio';
                break;
            case '/about':
                title = 'About | My Portfolio';
                break;
            case '/projects':
                title = 'Projects | My Portfolio';
                break;
            case '/contact':
                title = 'Contact | My Portfolio';
                break;
            case '/aboutPortfolio':
                title = 'About Portfolio | My Portfolio';
                break;
        }

        document.title = title;
    }, [location]);

    return null;
};

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <TitleSetter />
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