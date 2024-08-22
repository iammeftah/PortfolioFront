import { motion } from 'framer-motion';
import React from 'react';
import Header from '../components/Header';
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { Tabs } from "../components/ui/tabs";
import {ProjectDeckCards} from "../components/ProjectDeckCards";
import Particles from '../components/Particles';

const Projects: React.FC = () => {
    const tabs = [
        {
            title: "This Portfolio",
            value: "thisportfolio",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <img src="https://res.cloudinary.com/dbhbmpdh4/image/upload/v1724282803/fqteh1vwactpgmpepymg.png" alt="This portfolio Screenshot" className="rounded-xl max-w-full object-cover" />
                </div>
            ),
        },
        {
            title: "Jibi",
            value: "jibi",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <img src="https://res.cloudinary.com/dbhbmpdh4/image/upload/v1724265718/eo6ie65pa5a7finxmvme.png" alt="Jibi Screenshot" className="rounded-xl max-w-full object-cover" />
                </div>
            ),
        },
        {
            title: "UrbanVoyage",
            value: "urbanvoyage",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <img src="https://res.cloudinary.com/dbhbmpdh4/image/upload/v1724265520/eksk2ggjuieu4ssi0nuz.png" alt="UrbanVoyage Screenshot" className="rounded-xl max-w-full object-cover" />
                </div>
            ),
        },
    ];

    return (
        <div className="relative bg-darkModeBg text-darkModeTxt min-h-screen overflow-hidden">
            <div className="w-full absolute top-0 z-50">
                <Header/>
            </div>

            {/* Projects Section */}
            <section className="relative z-10 flex items-center justify-center min-h-screen w-full">
                <HeroHighlight className="absolute inset-0 flex items-center justify-center">
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                    >
                        Discover my{" "}
                        <br/>
                        <Highlight className="text-black dark:text-white">
                            Latest projects
                        </Highlight>
                        <br/>
                        Where creativity meets code.
                    </motion.h1>

                    <div className="absolute bottom-10 left-0 right-0 text-center">
                        <p className="text-purple-100 animate-bounce">
                            Scroll Down to Discover More
                        </p>
                    </div>


                </HeroHighlight>
            </section>


            <section>
                <div
                    data-aos={"fade-right"}
                    className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl px-6 md:px-4 mx-auto w-full items-start justify-start my-20">
                    <Tabs tabs={tabs}/>
                </div>
                <div className="relative z-10 flex items-center justify-center min-h-screen w-full">
                    <div className="absolute inset-0 z-0">
                        <Particles/>
                    </div>
                    <div className="relative z-10">
                        <ProjectDeckCards/>
                    </div>
                </div>

            </section>

        </div>
    );
};



export default Projects;