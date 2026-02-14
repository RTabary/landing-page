type Skill = {
	icon: string;
	title: string;
	description: string;
};

function Skills(): JSX.Element {
	const skills: Skill[] = [
		{
			icon: "💻",
			title: "Développement Fullstack",
			description:
				"Expert en JavaScript/TypeScript avec plus de 10 ans d'expérience. Du frontend moderne avec React au backend robuste avec Node.js.",
		},
		{
			icon: "🔌",
			title: "API Management",
			description:
				"Spécialisé dans Gravitee pour la gestion, sécurisation et monitoring d'APIs à grande échelle.",
		},
		{
			icon: "☸️",
			title: "Cloud & DevOps",
			description:
				"Déploiement et orchestration avec Kubernetes, configuration de pipelines CI/CD, et hébergement d'applications.",
		},
		{
			icon: "🏗️",
			title: "Architecture",
			description:
				"Conception d'applications scalables et maintenables, avec une approche pragmatique et orientée résultats.",
		},
	];

	return (
		<section id="skills">
			<div className="container">
				<h2 className="section-title">Compétences</h2>
				<div className="skills-grid">
					{skills.map((skill) => (
						<div key={skill.title} className="skill-card">
							<div className="skill-icon">{skill.icon}</div>
							<h3>{skill.title}</h3>
							<p>{skill.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
