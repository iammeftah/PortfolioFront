import React from 'react';

import Header from "../components/Header";
import { CardStackDemo } from "../components/ui/CardStackDemo";
import { Vortex } from "../components/ui/vortex";


const About: React.FC = () => {
    return (
        <div className="bg-darkModeBg text-darkModeTxt h-screen overflow-auto md:overflow-hidden">
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full min-h-screen"
            >

                <div className="w-full absolute top-0 z-50">
                    <Header />
                </div>

                {/* About & Skills Section */}
                <section className="py-20 px-4 md:px-32 flex-1 flex flex-col items-center justify-between">
                    <div className="flex flex-col md:flex-row gap-4 flex-grow items-center w-full">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple-100">MEFTAH Ahmed Reda</h1>
                            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-lavender-100">Computer Science
                                Engineer Student</h2>
                            <p className="text-lg mb-8">
                                Aspiring full-stack developer with a passion for creating innovative digital solutions.
                                Currently pursuing Computer Science Engineering at ENSA Marrakech, I blend technical
                                expertise
                                with creative problem-solving to build user-centric applications.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <CardStackDemo/>
                        </div>
                    </div>
                    <div className="hidden flex-wrap justify-center items-center gap-4 flex-col md:flex">
                        <div className={"flex flex-row gap-4"}>
                            <Chip>Problem Solving</Chip>
                            <Chip>Self-learning</Chip>
                            <Chip>Adaptability</Chip>
                        </div>
                        <div className={"flex flex-row gap-4"}>
                            <Chip>Team Management</Chip>
                            <Chip>Stress Management</Chip>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4 flex-col md:hidden">
                        <div className={"flex flex-row gap-4"}>
                            <Chip>Problem Solving</Chip>
                            <Chip>Self-learning</Chip>
                        </div>
                        <div className={"flex flex-row gap-4"}>
                            <Chip>Adaptability</Chip>
                            <Chip>Team Management</Chip>
                        </div>
                        <div className={"flex flex-row gap-4"}>
                            <Chip>Stress Management</Chip>
                        </div>
                    </div>
                </section>
            </Vortex>
        </div>
    );
};

const Chip: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <span className="bg-pink-300 text-darkModeTxt px-3 py-1 rounded-full text-sm font-semibold">
        {children}
    </span>
);

export default About;
