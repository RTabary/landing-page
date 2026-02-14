type Solution = {
	icon: string;
	title: string;
	description: string;
	examples: string;
};

function SkillsBusiness(): JSX.Element {
	const solutions: Solution[] = [
		{
			icon: "🌐",
			title: "Site Web & Vitrine",
			description:
				"Site internet professionnel pour présenter votre activité, vos services et convertir vos visiteurs en clients.",
			examples: "Portfolio, site vitrine, landing page",
		},
		{
			icon: "💼",
			title: "Application Métier",
			description:
				"Outil sur mesure pour gérer votre activité : suivi clients, devis, facturation, planning, stock...",
			examples: "CRM, gestion commerciale, planning",
		},
		{
			icon: "🔗",
			title: "Intégrations & Automatisation",
			description:
				"Connectez vos outils entre eux et automatisez les tâches répétitives pour gagner du temps.",
			examples: "Export automatique, synchronisation données",
		},
		{
			icon: "📊",
			title: "Tableaux de Bord",
			description:
				"Visualisez vos données importantes en temps réel pour prendre les bonnes décisions.",
			examples: "KPI, rapports, statistiques",
		},
		{
			icon: "🔐",
			title: "Espace Client / Intranet",
			description:
				"Plateforme sécurisée pour vos clients ou employés avec accès personnalisés.",
			examples: "Portail client, espace collaborateur",
		},
		{
			icon: "🎓",
			title: "Formation & Accompagnement",
			description:
				"Je forme votre équipe à utiliser vos outils et vous accompagne après la livraison.",
			examples: "Formation utilisateurs, documentation",
		},
	];

	return (
		<section id="solutions">
			<div className="container">
				<h2 className="section-title">Mes Solutions Pour Votre Business</h2>
				<div className="skills-grid">
					{solutions.map((solution) => (
						<div key={solution.title} className="skill-card">
							<span className="skill-icon">{solution.icon}</span>
							<h3>{solution.title}</h3>
							<p>{solution.description}</p>
							<div className="solution-examples">
								<small>{solution.examples}</small>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default SkillsBusiness;
