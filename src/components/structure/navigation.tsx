"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ModeToggle } from "../iteraction/mode-toggle";

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

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 bg-neutral-700 backdrop-blur overscroll-y-none duration-200 border-b  ${isIntersecting
					? "bg-zinc-900/500  border-zinc-800 "
					: "bg-zinc-900/0 border-transparent bg-transparent"
					}`}
			>
				<div className="container flex flex-row items-center justify-between p-6 mx-auto">
					<Link
						href="/"
						className="duration-200 text-zinc-400 hover:text-zinc-200"
					>
						{/* <ArrowLeft className="w-6 h-6 " /> */}
						{String.fromCharCode(8592)}
					</Link>

					<div className="flex justify-between gap-10">
						<Link
							href="/projects"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Projects
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</Link>
						<ModeToggle />
					</div>

				</div>
			</div>
		</header>
	);
};
