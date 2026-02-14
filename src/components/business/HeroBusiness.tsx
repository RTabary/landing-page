import { MouseEvent } from "react";

function HeroBusiness(): JSX.Element {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const handleClick = (
		event: MouseEvent<HTMLAnchorElement>,
		sectionId: string,
	) => {
		event.preventDefault();
		scrollToSection(sectionId);
	};

	return (
		<section className="hero visible">
			<div className="container">
				<div className="hero-content">
					<h1>Développeur Web Freelance à Lille</h1>
					<p className="subtitle">
						Je transforme vos idées en solutions web sur mesure
					</p>
					<p className="tagline">
						Site internet, application métier, automatisation - Sans jargon
						technique, avec un accompagnement complet
					</p>
					<div className="cta-buttons">
						<a
							href="#solutions"
							className="btn btn-primary"
							onClick={(event) => handleClick(event, "solutions")}
						>
							Découvrir mes solutions
						</a>
						<a
							href="#contact"
							className="btn btn-secondary"
							onClick={(event) => handleClick(event, "contact")}
						>
							Parlons de votre projet
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroBusiness;
