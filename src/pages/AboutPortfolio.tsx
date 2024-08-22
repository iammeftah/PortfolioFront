import React from 'react';
import Header from '../components/Header';

const AboutPortfolio: React.FC = () => {
    return (
        <div className="relative bg-darkModeBg text-darkModeTxt min-h-screen overflow-hidden">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-4xl font-bold mb-8 text-purple-100">About this Portfolio</h1>
                <p className="text-lg mb-4">
                    This portfolio website was developed using the following technologies:
                </p>
                <ul className="list-disc pl-6 mb-8">
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>DatAOS (for animations)</li>
                    <li>Custom logos and professional styling</li>
                </ul>
                <p className="text-lg">
                    The goal was to create a modern, visually appealing, and interactive portfolio to showcase my skills and projects. I put a lot of effort into making it look and feel professional, while also incorporating my personal style and creativity.
                </p>
            </main>
        </div>
    );
};

export default AboutPortfolio;