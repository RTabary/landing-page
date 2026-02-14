type Audience = "tech" | "business";

type AudienceSelectorProps = {
	onSelectAudience: (audience: Audience) => void;
};

function AudienceSelector({
	onSelectAudience,
}: AudienceSelectorProps): JSX.Element {
	return (
		<div className="audience-selector">
			<div className="audience-container">
				<div className="audience-header">
					<h1>Bienvenue</h1>
					<p>Choisissez votre profil pour une expérience adaptée</p>
				</div>

				<div className="audience-cards">
					<button
						className="audience-card tech"
						onClick={() => onSelectAudience("tech")}
					>
						<div className="card-icon">&lt;/&gt;</div>
						<h2>Je suis Tech</h2>
						<p>Développeur, CTO, Tech Lead</p>
						<ul>
							<li>Stack technique détaillée</li>
							<li>Projets open source</li>
							<li>Architecture & APIs</li>
							<li>Plans pour dominer le monde</li>
						</ul>
						<span className="card-cta">Voir le profil technique →</span>
					</button>

					<button
						className="audience-card business"
						onClick={() => onSelectAudience("business")}
					>
						<div className="card-icon">💼</div>
						<h2>Non Tech</h2>
						<p>RH, Manager, Entrepreneur, TPE/PME</p>
						<ul>
							<li>Solutions web adaptées</li>
							<li>Cas d'usage concrets</li>
							<li>Retour sur investissement</li>
							<li>Accompagnement projet</li>
						</ul>
						<span className="card-cta">Voir le profil business →</span>
					</button>
				</div>

				<button
					className="skip-button"
					onClick={() => onSelectAudience("tech")}
				>
					Passer cette étape
				</button>
			</div>
		</div>
	);
}

export default AudienceSelector;
