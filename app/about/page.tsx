"use client";
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

				<div className=" w-[50vw] gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">
						<Card>
							<div className="h-[80vh] flex flex-col flex-1 p-8 justify-center items-center lg:p-4">
			<h1 
			className="text-xl font-medium duration-150 p-2 lg:text-3xl text-zinc-400 
			group-hover:text-white font-display xl:pb-8">
				Sobre
				</h1>
				{about.map((a) => (
				<div className="max-w-xl text-justify">
					<p className="duration-150 lg:text-xl text-zinc-300 
			group-hover:text-white sm:text-sm">
				{a.description}
				</p>
				<div className="grid grid-cols-8 grid-rows-2 gap-4 py-8 lg:py-4">
				{a.technologies.map((t) => (
					<Image className="mx-2 lg:p-1 hover:scale-125" alt={t} width={40} height={40} src={t} />
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
