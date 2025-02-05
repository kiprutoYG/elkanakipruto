"use client";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";

export const Navigation: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(true);
    useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

    return(
        <header ref={ref}>
            <div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-black-900/500  border-zinc-800 "
				}`}
			></div>
            <div className="text-white">
                <div className="relative flex flex-row justify-between space-x-5">
                    <div>
                        <Link
                            href = "/projects"
                            className="duration-200 text-white hover:text-zinc-100"
                        >
                            projects
                        </Link>
                    </div>
                    <div>
                    <Link
                            href = "/contact"
                            className="duration-200 text-white hover:text-zinc-100"
                        >
                            contact
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}