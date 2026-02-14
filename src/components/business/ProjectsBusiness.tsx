type UseCase = {
	title: string;
	problem: string;
	solution: string;
	result: string;
	highlight?: boolean;
	logo?: boolean;
	logoUrl?: string;
	textLogo?: string;
	emoji?: string;
};

function ProjectsBusiness(): JSX.Element {
	const useCases: UseCase[] = [
		{
			logo: true,
			title: "Grand Groupe International",
			problem:
				"Besoin de structurer et former des centaines de collaborateurs sur de nouveaux outils",
			solution:
				"7+ ans chez Decathlon : formation de 200+ développeurs, création de plateformes internes, documentation complète",
			result: "Expérience à grande échelle",
			highlight: true,
		},
		{
			logo: true,
			logoUrl: "/logo-kiss-the-bride.png",
			title: "Agence Marketing",
			problem:
				"Multiples outils (CRM, bases de données, outils tiers) qui ne communiquaient pas entre eux",
			solution:
				"3 ans chez Golden Eyes : création d'une plateforme centrale pour connecter tous les outils et centraliser les données clients",
			result: "Données unifiées, gain de temps",
			highlight: true,
		},
		{
			logo: true,
			logoUrl: "/salto_consulting_cover.jpeg",
			title: "Cabinet de Conseil Digital",
			problem:
				"TPE/PME qui ont besoin d'outils simples pour gérer leur contenu web et leurs projets",
			solution:
				"Chez Salto Consulting : développement d'un micro-CMS adapté aux petites structures + contribution à un outil de gestion de projet",
			result: "Outils accessibles pour TPE/PME",
			highlight: true,
		},
		{
			emoji: "🎯",
			title: "TPE & Startups",
			problem:
				"Besoin d'outils sur mesure sans le budget des grandes entreprises",
			solution:
				"Applications web adaptées : gestion clients, planning, facturation, sites vitrines",
			result: "Solutions accessibles et évolutives",
		},
		{
			emoji: "🔗",
			title: "Automatisation & Intégrations",
			problem:
				"Tâches répétitives qui font perdre du temps et génèrent des erreurs",
			solution:
				"Connexion entre vos outils existants pour automatiser les flux de données",
			result: "Temps gagné, moins d'erreurs",
		},
		{
			emoji: "🤖",
			title: "Intelligence Artificielle pour votre Business",
			problem:
				"L'IA c'est bien, mais comment l'utiliser concrètement dans mon entreprise ?",
			solution:
				"Assistants IA personnalisés connectés à vos données et outils. Automatisation intelligente, aide à la décision, traitement de documents, support client...",
			result: "IA adaptée à VOS besoins",
		},
	];

	return (
		<section id="projects">
			<div className="container">
				<h2 className="section-title">Mon Expérience &amp; Mes Solutions</h2>
				<div className="projects-grid">
					{useCases.map((useCase) => (
						<div
							key={useCase.title}
							className={`project-card ${useCase.highlight ? "highlight-card" : ""}`}
						>
							<div
								className={`project-image ${
									useCase.logo || useCase.textLogo
										? "company-logo-container"
										: ""
								}`}
							>
								{useCase.logo ? (
									<img
										src={
											useCase.logoUrl ||
											"https://logos-world.net/wp-content/uploads/2020/12/Decathlon-Logo.png"
										}
										alt={useCase.title}
										className="company-logo"
									/>
								) : useCase.textLogo ? (
									<div className="text-logo">{useCase.textLogo}</div>
								) : (
									(useCase.emoji ?? null)
								)}
							</div>
							<div className="project-content">
								<h3>{useCase.title}</h3>
								{useCase.highlight && (
									<div className="experience-badge">Mon Expérience</div>
								)}

								<div className="use-case-section">
									<strong>
										{useCase.highlight ? "Le contexte :" : "Le problème :"}
									</strong>
									<p>{useCase.problem}</p>
								</div>

								<div className="use-case-section">
									<strong>
										{useCase.highlight ? "Mon rôle :" : "La solution :"}
									</strong>
									<p>{useCase.solution}</p>
								</div>

								<div className="use-case-result">
									<span className="result-badge">
										✓ {useCase.highlight ? "" : "Résultat : "}
										{useCase.result}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="cta-section">
					<h3>Votre projet ressemble à l'un de ces cas ?</h3>
					<p>Parlons-en pour voir comment je peux vous aider.</p>
				</div>
			</div>
		</section>
	);
}

export default ProjectsBusiness;
