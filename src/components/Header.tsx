import React, { useState, useEffect } from 'react';

import { FiHome, FiInfo, FiFolder, FiMail } from 'react-icons/fi';
import { BottomNav } from "./ui/BottomNav";

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 768) { // Check if the screen width is greater than or equal to 768px (medium breakpoint)
                setIsScrolled(window.scrollY > 50);
            } else {
                setIsScrolled(false); // Reset the isScrolled state to false for phone mode
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '/', icon: <FiHome className="w-6 h-6" />, label: 'Home' },
        { href: '/about', icon: <FiInfo className="w-6 h-6" />, label: 'About' },
        { href: '/projects', icon: <FiFolder className="w-6 h-6" />, label: 'Projects' },
        { href: '/contact', icon: <FiMail className="w-6 h-6" />, label: 'Contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-darkModeBg shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="/" className="text-xl font-bold text-purple-100 hidden md:block">MEFTAH.</a>

                    <nav className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <a
                            key={item.href}
                            href={item.href}
                            className="text-lavender-100 opacity-50 hover:opacity-100 hover:text-purple-100 relative group transition-colors duration-300"
                            >
                        {item.label}
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-100 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 origin-center"></span>
                            </a>
                            ))}
                    </nav>
                </div>
            </div>

            {/* Bottom Navigation */}
            <BottomNav navItems={navItems} />
        </header>
    );
};

export default Header;