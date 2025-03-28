"use client";

import { useRouter } from "next/navigation";
import {ArrowLeft, Mail, Phone, Github, Linkedin } from "lucide-react";
import ParticlesComponent from "../components/particles";


export default function Contact(){
    const router = useRouter();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <button onClick={() => router.push("/")} className="absolute top-6 left-6 flex items-center text-white hover:text-blue-700 transition">
                <ArrowLeft size={26} className="mr-2"/> <span className="text-lg">Back</span>
            </button>
            <div className="bg-white shadow-lg rounded-xl space-y-4 w-full max-w-md">
                <ParticlesComponent/>
                <h1 className="font-bold text-lg text-black items-center p-4">Contact Me</h1>
                <ContactItem
                icon = {<Mail size={24}/>}
                title = "Email"
                value = "ygmodest@gmail.com"
                link = "mailto:ygmodest@gmail.com"
                />
                <ContactItem
                icon = {<Phone size={24}/>}
                title = "Phone"
                value = "+254 715612059"
                link = "tel:+254 715612059"
                />
                <ContactItem
                icon = {<Linkedin size={24}/>}
                title = "LinkedIn"
                value = "Elkana Kipruto"
                link = "https://www.linkedin.com/in/elkana-kipruto-83769b303"
                />
                <ContactItem
                icon = {<Github size={24}/>}
                title = "Github"
                value = "Kipruto"
                link = "https://github.com/kiprutoYG"
                />
            </div>
        </div>
    );

    function ContactItem({ icon, title, value, link }: { icon: React.ReactNode; title: string; value: string; link: string; }) {
        return (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
          >
            <div className="text-blue-500">{icon}</div>
            <div>
              <p className="text-sm text-gray-400 font-semibold">{title}</p>
              <p className="text-gray-700 text-sm">{value}</p>
            </div>
          </a>
        )};
}