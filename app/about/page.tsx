"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";

const about = [
	{
		description: `Meu nome é Luís Felipe, tenho 33 anos. Sou Desenvolvedor de Software vindo de um transição de carreira das Ciências Contábeis. Em 2014, tive meu primeiro contato com desenvolvimento: fiz alguns jogos na simples em Unity e depois um curso de Java. Em 2015, cheguei a iniciar a faculdade de Análise de Sistemas, mas parei o curso para poder me dedicar a cuidar do escritório de contabilidade de minha família. Em 2020, retomei meus estudos em programação e, em 2022, dei início a carreira como dev. 
		
		Sou introvertido, mas a minha curiosidade é maior e converso com muita gente para aprender coisas novas, trocar culturalmente e evoluir. As pessoas mais íntimas me acham muito solícito, atento leal e prestativo, e apesar de achar que todos deveria ser assim, sei que contam como minhas qualidades. 
		
		Adoro esportes e filosofia. Sou gamer, de vez em quando. Sou pai de 4 gatos, 3 frajolas: Michael Jordan, Bruce Wayne e Panda Maria; e 1 Amarela: Sucrilhas. E sou da gangue do Hamburger com batata fritas. 

		Se você quiser saber mais sobre minha vida profissional, fique a vontade para fazer download do meu currículo abaixo.`,
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
			<div className="container flex items-center justify-center min-h-screen p-4 mx-auto">

				<div className="pt-16 pb-2 flex flex-col items-center">
			<h1 
			className="text-xl font-medium duration-150 pb-2 lg:text-3xl text-zinc-400 
			group-hover:text-white md:text-3xl font-display xl:pb-4">
				Sobre
				</h1>
				
				{about.map((a) => (
				<div className="max-w-xl text-justify">
					<p className="text-sm tracking-tighter duration-150  text-zinc-300 
			group-hover:text-white sm:text-base md:text-lg">
					{a.description.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />	
      </React.Fragment>
			))}
			</p>
				<div className="text-center py-2 sm:py-4">
					<Link
								href="https://github.com/artenlf/arten.tech/raw/main/public/Luis-Felipe-Arten-CV.pdf"
								target="_blank"
								className="text-lg font-medium duration-150 font-display lg:text-2xl text-zinc-400 
								hover:text-blue-400 hover:underline"
							>Download CV
							</Link>
							</div>
				<div className="grid grid-cols-8 gap-1 sm:gap-x-8 sm:gap-y-4 sm:py-4 sm:grid-cols-8">
				{a.technologies.map((t) => (
					<Image className="w-6 h-6 hover:scale-125 sm:w-10 sm:h-10" alt={t} width={40} height={40} src={t} />
				))}
				</div>
				</div>
				))}
				
			</div>
					
				</div>
			</div>
	);
}
