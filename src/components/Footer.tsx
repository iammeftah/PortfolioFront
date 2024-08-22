import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-black text-darkModeTxt py-10 px-64">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold text-fuchsia-100 mb-2">Let's connect</h2>
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/itserror808"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-800 transition-colors duration-100"
                            >
                            <FiGithub className="w-6 h-6 hover:text-fuchsia-400 duration-200" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ahmed-reda-meftah-015641281/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-800 transition-colors duration-100"
                            >
                            <FiLinkedin className="w-6 h-6 hover:text-fuchsia-400 duration-200" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href="mailto:meftahahmedreda02@gmail.com"
                            className="text-white hover:text-gray-800 transition-colors duration-100"
                            >
                            <FiMail className="w-6 h-6 hover:text-fuchsia-400 duration-200" />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
                <div className="text-center md:text-right">
                    <p className="text-white">I'm always open to new opportunities and collaborations.</p>
                    <p className="text-white">Feel free to reach out!</p>
                    <div className="mt-4">
                        <p className="text-white text-sm">&copy; {currentYear} MEFTAH • <Link to="/aboutPortfolio" className="text-fuchsia-100 hover:text-fuchsia-400 transition-colors duration-200">About This Portfolio</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;