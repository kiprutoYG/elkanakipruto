"use client";

import { useState } from "react";
import React from "react";
import {motion} from "framer-motion";
import Link from "next/link";


const projects = [
    {title: "WeatherNow",
        date: "2025-02-01",
        description: "A weather app that shows the current weather in your location",
        url: "https://weatherapp-self-phi.vercel.app"
    },

    {title: "BoderTact",
        date: "2024-08-20",
        description: "A modern website to showcase the solutions offered by BoderTact in customs",
        url: "https://bodertact.vercel.app"
    },
]

export default function Projects() {
    const [openIndex, setisOpenIndex] = useState<number | null>(null);

    return (
        <div className="max-w-7xl mx-auto px-6">
            <h1>Projects</h1>
            <div className="space-y-6">
                {projects.map((project,index) => ( 
                    <motion.div
                        key={index}
                        className="p-5 border border-gray-700 rounded-lg bg-gray-900/50 cursor-pointer hover:bg-slate-700 transition-all"
                        onClick={() => setisOpenIndex(openIndex === index? null: index)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                    >
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">{project.title}</h2>
                        <span className="text-gray-400">{project.date}</span>
                    </div>
                    {openIndex === index && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 text-gray-300"
                        >
                        <p>{project.description}</p>
                        <Link
                        href={project.url}
                        target="_blank"
                        className="text-indigo-300 hover:text-indigo-200"
                        >Explore project →</Link>
                        </motion.div>
                    )}
                    
                    </motion.div>))}
            </div>
        </div>
    )
}