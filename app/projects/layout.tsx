export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-slate-900/40 via-purple-600/25 to-slate-900/40 ">
			{children}
		</div>
	);
}
