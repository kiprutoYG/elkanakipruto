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
    {title: "Porto Alegre Flood Report",
        date: "2024-06-20",
        description: "A website showcasing the detailed report of a flood mapping project done to assess the severity of the damage El Niño caused in Porto Alegre",
        url: "https://portoalegrereport.vercel.app/"
    },
]

export default function Projects() {
    const [openIndex, setisOpenIndex] = useState<number | null>(null);

    return (
        <div className="max-w-7xl mx-auto px-6">
            <nav className="py-6">
                <Link
                href="/contact">Contact</Link>
                <hr className="w-full h-px opacity-25"/>
            </nav>
            <h1 className="text-lg md:text-4xl font-bold pb-3">Projects</h1>
            <h2 className="text-gray-400 pb-3 md:pb-14">Some of the projects are geospatial and some are development</h2>
            <hr className="py-6 shadow-lg border-1 h-px opacity-25"/>
            <div className="space-y-6"> 
                {projects.map((project,index) => ( 
                    <motion.div
                        key={index}
                        className="p-5 border border-gray-700 rounded-lg bg-gray-900/50 cursor-pointer hover:bg-slate-700 transition-all"
                        onClick={() => setisOpenIndex(openIndex === index? null: index)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0}}
                        whileHover={{ scale: 1.02 }}
                    >
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">{project.title}</h2>
                        <span className="text-gray-500">{project.date}</span>
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
                    
                    </motion.div> ))}
            </div>
        </div>
    )
}