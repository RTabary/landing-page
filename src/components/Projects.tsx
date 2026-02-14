type Project = {
	emoji: string;
	title: string;
	description: string;
	tags: string[];
	link: string;
	image?: string;
};

function Projects(): JSX.Element {
	const projects: Project[] = [
		{
			emoji: "✈️",
			title: "Google Flights MCP Server",
			description:
				"Serveur MCP qui scrape Google Flights pour rechercher des vols. API simple qui prend en entrée les aéroports de départ/arrivée, les dates et le nombre de voyageurs, et retourne les vols disponibles avec prix et escales.",
			tags: ["MCP", "Web Scraping", "TypeScript", "API"],
			link: "https://flights-scrapper-mcp.baddummy.com/mcp",
		},
	];

	return (
		<section id="projects">
			<div className="container">
				<h2 className="section-title">Projets</h2>
				<div className="projects-grid">
					{projects.map((project) => (
						<div key={project.title} className="project-card">
							<div className="project-image">
								{project.image ? (
									<img
										src={project.image}
										alt={project.title}
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
									/>
								) : (
									project.emoji
								)}
							</div>
							<div className="project-content">
								<h3>{project.title}</h3>
								<p>{project.description}</p>
								<div className="project-tags">
									{project.tags.map((tag) => (
										<span key={tag} className="project-tag">
											{tag}
										</span>
									))}
								</div>
								<a href={project.link} className="project-link">
									Voir le projet →
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
