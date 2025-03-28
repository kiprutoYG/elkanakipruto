"use client";

import { useState } from "react";
import React from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";


const projects = [
    {title: "WeatherNow",
        date: "2025-02-01",
        description: "A weather app that shows the current weather in your location",
        technologies: "ReactJS for the frontend, OpenWeatherMap API for real time weather data , TailwindCSS for stying, and ExpressJS to handle the API requests",
        url: "https://weatherapp-self-phi.vercel.app"
    },

    {title: "BoderTact",
        date: "2024-08-20",
        description: "A modern website to showcase the solutions offered by BoderTact in customs",
        technologies: "ReactJS for the frontend and TailwindCSS for stying, no backend",
        url: "https://bodertact.vercel.app"
    },
    {title: "Porto Alegre Flood Report",
        date: "2024-06-20",
        description: "A website showcasing the detailed report of a flood mapping project done to assess the severity of the damage El Niño caused in Porto Alegre",
        technologies: "NextJS for the frontend and TailwindCSS for stying, no backend",
        url: "https://portoalegrereport.vercel.app/"
    },
    {title: "Karura Forest Deforestation Monitoring Dashboard",
        date: "2025-03-20",
        description: "The Karura Forest Deforestation Monitoring Dashboard is a geospatial web application designed to track and analyze deforestation trends within Karura Forest. This project integrates cutting-edge geospatial technologies with web development to provide real-time insights into forest cover changes.",
        technologies: "NextJS for the frontend, LeafletJS for the imagery embedding, ESRI for real time satellite imagery, NewsAPI for real time news updates on forestry, ExpressJS to handle the API requests, Recharts for dynamic forest cover trend as a graph, and TailwindCSS for stying",
        url: "https://karura-analysis-client.vercel.app/"
    },
]

export default function Projects() {
    const [openIndex, setisOpenIndex] = useState<number | null>(null);
    const router = useRouter();

    return (
        <div className="max-w-7xl mx-auto px-6">
            <button onClick={() => router.push("/")} className="absolute top-6 right-6 flex items-center text-white hover:text-gray-300 transition-all">
                <ArrowLeft size = {18} className="mr-2"/> <span className=" text-sm">Back</span>
            </button>
            <h1 className="text-lg md:text-4xl font-bold py-3">Projects</h1>
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
                        <p className="py-3 font-semibold text-thro">Technologies used:</p>
                        <p className="mt-2">{project.technologies}</p>
                        <hr className="my-4 border-1 h-px opacity-25"/>
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