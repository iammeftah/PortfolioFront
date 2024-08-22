"use client";
import React from "react";
import { cn } from "../../utils/utils";
import { CardStack } from "./card-stack";
import { FiCode, FiServer, FiDatabase } from "react-icons/fi";

export interface Card {
    id: number;
    name: string;
    designation: string | React.ReactNode;
    content: React.ReactNode;
}

export function CardStackDemo() {
    return (
        <div className="flex items-center justify-center w-full py-12">
            <CardStack items={CARDS} />
        </div>
    );
}

export const Highlight = ({
                              children,
                              className,
                          }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};

const CARDS: Card[] = [
    {
        id: 0,
        name: "Frontend Development",
        designation: <FiCode className="text-4xl" />,
        content: (
            <p className="text-base sm:text-lg lg:text-xl">
                Proficient in <Highlight>ReactJS</Highlight>, <Highlight>AngularJS</Highlight>,{" "}
                <Highlight>TypeScript</Highlight>, and <Highlight>TailwindCSS</Highlight>.
                Creating responsive and interactive user interfaces is my passion.
            </p>
        ),
    },
    {
        id: 1,
        name: "Backend Development",
        designation: <FiServer className="text-4xl" />,
        content: (
            <p className="text-base sm:text-lg lg:text-xl">
                Experienced with <Highlight>Spring Boot</Highlight>,{" "}
                <Highlight>Java</Highlight>, and <Highlight>C/C++</Highlight>.
                Building robust and scalable server-side applications is my forte.
            </p>
        ),
    },
    {
        id: 2,
        name: "Database Management",
        designation: <FiDatabase className="text-4xl" />,
        content: (
            <p className="text-base sm:text-lg lg:text-xl">
                Skilled in working with <Highlight>MySQL</Highlight>, <Highlight>PostgreSQL</Highlight>,{" "}
                and <Highlight>Oracle</Highlight> databases. Designing efficient data structures
                and optimizing queries for performance.
            </p>
        ),
    },
];