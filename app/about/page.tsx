"use client";
import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import Image from "next/image";

const about = [
	{
		description: "Sou Desenvolvedor de Software Júnior ávido por novos conhecimentos, desafios e por aprimorar das minhas habilidades, buscando contribuir para o desenvolvimento e manutenção de produtos. No último ano, tenho trabalhado principalmente com React.js e tecnologias correlatas como TypeScript e Next.js, focando em construir interfaces de usuário funcionais, com bom desempenho, arquitetura limpa e melhores práticas de código. Desenvolvi projetos que integram APIs como a da GitHub, da Google e checkout de carrinho de compras da Stripe. Além disso, nos últimos meses, venho desenvolvendo alguns projetos Full-Stack utilizando tecnologias como Node.js, Prisma ORM e bancos de dados relacionais, incluindo MySQL e PostgreSQL. Por fim, sou uma pessoa proativa, colaborativa e consciente de si, buscando colocação onde possa para aplicar o conhecimento que adquiri, construir novas soluções e resolver problemas.",
		technologies:[
			"https://github.com/devicons/devicon/raw/master/icons/react/react-original-wordmark.svg",
			"https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg",
			"https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg",
			"https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg",
			"https://github.com/devicons/devicon/raw/master/icons/css3/css3-original.svg",
			"https://github.com/artenlf/icons/raw/main/next.svg",
			"https://github.com/devicons/devicon/raw/master/icons/tailwindcss/tailwindcss-plain.svg",
			"https://github.com/devicons/devicon/raw/master/icons/sass/sass-original.svg",
			"https://github.com/devicons/devicon/raw/master/icons/storybook/storybook-original.svg",
			"https://github.com/devicons/devicon/raw/master/icons/nodejs/nodejs-original.svg",
			"https://github.com/devicons/devicon/raw/master/icons/docker/docker-original.svg",
			"https://github.com/devicons/devicon/raw/master/icons/redis/redis-original.svg",
			"https://github.com/devicons/devicon/raw/master/icons/postgresql/postgresql-original.svg",
			"https://github.com/devicons/devicon/raw/master/icons/mysql/mysql-original-wordmark.svg",
			"https://github.com/devicons/devicon/raw/master/icons/dot-net/dot-net-original.svg",
			"https://github.com/devicons/devicon/raw/master/icons/csharp/csharp-original.svg"
	]
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-slate-900/40 via-purple-600/25 to-slate-900/40">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">

				<div className="w-[75vw] xl:w-[50vw]">
						<Card>
							<div className="h-[80vh] flex flex-col flex-1 p-4 justify-center items-center sm:p-8 lg:p-2">
			<h1 
			className="text-xl font-medium duration-150 p-2 lg:text-3xl text-zinc-400 
			group-hover:text-white font-display xl:pb-4">
				Sobre
				</h1>
				
				{about.map((a) => (
				<div className="max-w-xl text-justify">
					<p className="text-xs duration-150  text-zinc-300 
			group-hover:text-white sm:text-base lg:text-lg xl:text-xl">
				{a.description}
				</p>
				<div className="text-center p-4">
					<Link
								href="https://github.com/artenlf/arten.tech/raw/main/public/CV.pdf"
								target="_blank"
								className="text-xl font-medium duration-150 font-display lg:text-2xl text-zinc-400 
								hover:text-blue-400  hover:underline"
							>Download CV
							</Link>
							</div>
				<div className="grid grid-cols-4 gap-x-8 gap-y-4 py-4 sm:grid-cols-8">
				{a.technologies.map((t) => (
					<Image className="w-6 h-6 mx-2 hover:scale-125 sm:w-10 sm:h-10" alt={t} width={40} height={40} src={t} />
				))}
				</div>
				</div>
				))}
				
			</div>
						</Card>
				</div>
			</div>
		</div>
	);
}
