"use client";
import React, {useState} from "react";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";
import Header from "../Header";
import { FlipWords } from "./flip-words";
import axios, { AxiosResponse } from "axios";

export function ShootingStarsAndStarsBackgroundDemo() {
    const words = ["Frontend", "Backend", "Full-Stack"];
    const [isLoading, setIsLoading] = useState(false);

    const handleDownloadResume = async () => {
        setIsLoading(true);
        try {
            const response: AxiosResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/download-resume`, {
                responseType: "blob",
            });

            const url = window.URL.createObjectURL(response.data);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "MEFTAH Ahmed Reda Resume.pdf");
            document.body.appendChild(link);
            link.click();

            // Clean up the temporary link element
            if (link.parentNode) {
                link.parentNode.removeChild(link);
            }
            setIsLoading(false);
        } catch (error) {
            console.error("Error downloading resume:", error);
            setIsLoading(false);
        }
    };

    return (
        <div className="h-screen bg-darkModeBg flex flex-col items-center justify-center relative w-full overflow-hidden">
            <div className="w-full absolute top-0 z-50">
                <Header />
            </div>

            <div className="relative z-10 text-center space-y-6 px-4 ">
                <h1 className="text-4xl md:text-6xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-300">
            MEFTAH Ahmed Reda
          </span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-medium text-lavender-100">
                    <FlipWords words={words} />
                    Developer & UI/UX Enthusiast
                </h2>
                <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto">
                    Crafting stellar digital experiences with code and creativity
                </p>
                <div
                    className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mt-8 scale-125">
                    <button
                        onClick={handleDownloadResume}
                        className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
                        disabled={isLoading}
                    >
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span
                    className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(192,132,252,0.6)_0%,rgba(192,132,252,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"/>
            </span>
                        <div
                            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin h-4 w-4 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l-3-2.647z"
                                        ></path>
                                    </svg>
                                    <span className="ml-2">Downloading...</span>
                                </div>
                            ) : (
                                <>
                                    <span>Download Resume</span>
                                    <svg
                                        fill="none"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 17V7M7 12L12 17L17 12"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </>
                            )}
                        </div>
                        <span
                            className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40"/>
                    </button>
                </div>
            </div>

            <ShootingStars/>
            <StarsBackground/>
        </div>
    );
}