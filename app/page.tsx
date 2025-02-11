import React from "react";
import Link from "next/link";
import ParticlesComponent from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-main via-secondary to-main">
      <div className="container w-auto rounded-md inset-0 bg-black">
      <ParticlesComponent/>
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="duration-500 text-white text-lg hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
        <div className="hidden items-center h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />   
          <p className="text-center p-3 text-thro text-lg">I am Yegon Elkana, <span className="animate-glow text-xl drop-shadow-md animate-pulse">{`</Welcome>`}</span> to my portfolio</p>
        <div/>
      </nav>
      </div>
    </div>
  );
}
