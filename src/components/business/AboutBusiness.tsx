function AboutBusiness(): JSX.Element {
	return (
		<section id="about">
			<div className="container">
				<h2 className="section-title">Pourquoi faire appel à moi ?</h2>
				<div className="about-content">
					<p>
						<strong>10 ans d'expérience</strong> à créer des solutions web pour
						des entreprises de toutes tailles. J'ai accompagné de{" "}
						<strong>très gros projets</strong> comme des{" "}
						<strong>projets à taille plus humaine</strong>, du grand groupe à la
						TPE.
					</p>
					<p>
						Mon approche ? <strong>Simple et efficace.</strong> Je traduis vos
						besoins métier en solutions techniques, sans le jargon compliqué.
						Vous gardez le contrôle, je m'occupe de la technique.
					</p>
					<p>
						Basé à <strong>Lille</strong>, j'interviens en remote ou sur site
						selon vos besoins. Tarifs transparents, délais respectés,
						accompagnement jusqu'au bout du projet.
					</p>

					<div className="business-values">
						<div className="value-item">
							<span className="value-icon">🤝</span>
							<h3>Accompagnement complet</h3>
							<p>De l'idée à la mise en ligne, je vous guide à chaque étape</p>
						</div>
						<div className="value-item">
							<span className="value-icon">💰</span>
							<h3>Budget maîtrisé</h3>
							<p>
								Devis clair, pas de surprises, facturation au forfait ou à la
								journée
							</p>
						</div>
						<div className="value-item">
							<span className="value-icon">⚡</span>
							<h3>Réactivité</h3>
							<p>
								Disponible rapidement, réponses sous 24h, interventions
								flexibles
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutBusiness;
