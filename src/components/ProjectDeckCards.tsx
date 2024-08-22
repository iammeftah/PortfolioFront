"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function ProjectDeckCards() {
    return (
        <>

            <div
                className="h-[50rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={projects}
                    direction="right"
                    speed="slow"
                />
            </div>
        </>
    )
        ;
}

const projects = [
    {
        quote: "This Portfolio - Crafting Stellar Digital Experiences",
        name: "This Portfolio",
        title: "A portfolio website showcasing my skills and projects, built using React, Spring Boot, MySQL, AOS (Animate on Scroll), and Tailwind CSS.",
        technologies: "React, Spring Boot, MySQL, Data AOS, Tailwind CSS"
    },
    {
        quote: "Jibi",
        name: "Jibi",
        title: "This project handles various banking transactions, managing and processing them efficiently.",
        technologies: "Angular, Spring Boot, MySQL, API"
    },
    {
        quote: "UrbanVoyage - Autocar Travel in Morocco",
        name: "UrbanVoyage",
        title: "UrbanVoyage is an autocar travel web application that serves car traveling in Morocco.",
        technologies: "React, Spring Boot, Tailwind, PostgreSQL, API"
    },
];