"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
    id: number;
    name: string;
    designation: string | React.ReactNode;
    content: React.ReactNode;
};

export const CardStack = ({
                              items,
                              offset,
                              scaleFactor,
                          }: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 15;
    const SCALE_FACTOR = scaleFactor || 0.05;
    const [cards, setCards] = useState<Card[]>(items);

    useEffect(() => {
        startFlipping();
        return () => clearInterval(interval);
    }, []);

    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards];
                newArray.unshift(newArray.pop()!);
                return newArray;
            });
        }, 5000);
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto h-[250px] sm:h-[300px] md:h-[400px]">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="absolute inset-0 dark:bg-black bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
                        style={{
                            transformOrigin: "top center",
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR,
                            zIndex: cards.length - index,
                            opacity: 1 - index * 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="font-normal text-neutral-700 dark:text-neutral-200 overflow-auto flex-grow">
                            {card.content}
                        </div>
                        <div className="mt-6">
                            <p className="text-xl sm:text-2xl font-semibold text-neutral-800 dark:text-white">
                                {card.name}
                            </p>
                            <div className="text-neutral-600 dark:text-neutral-300 mt-2 text-3xl">
                                {card.designation}
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};