"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/artenlf/",
		label: "LinkedIn",
		handle: "@artenlf",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:arten@arten.tech",
		label: "Email",
		handle: "arten@arten.tech",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/artenlf",
		label: "GitHub",
		handle: "artenlf",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-slate-900/40 via-purple-600/25 to-slate-900/40">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 
								text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white
								 group-hover:bg-slate-900/20 border-zinc-500 bg-purple-900/10 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-300 group-hover:text-zinc-100">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
