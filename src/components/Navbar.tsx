import { Link, useLocation } from "react-router-dom";
import { MouseEvent, useState } from "react";
import type { Audience } from "../types/Audience.type";

type NavbarProps = {
	audience: Audience | null;
	onAudienceChange?: (audience: Audience) => void;
};

function Navbar({ audience, onAudienceChange }: NavbarProps): JSX.Element {
	const location = useLocation();
	const isHome = location.pathname === "/";
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const currentAudience: Audience = audience ?? "tech";

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
		setIsMenuOpen(false);
	};

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const handleAudienceSwitch = (targetAudience: Audience) => {
		if (onAudienceChange && targetAudience !== currentAudience) {
			onAudienceChange(targetAudience);
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	const handleNavClick = (
		event: MouseEvent<HTMLAnchorElement>,
		sectionId: string,
	) => {
		event.preventDefault();
		scrollToSection(sectionId);
	};

	return (
		<nav>
			<div className="container">
				<Link to="/" className="logo" aria-label="Accueil">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M3 10.5 12 3l9 7.5" />
						<path d="M5 9.5v11h14v-11" />
						<path d="M9 20.5v-6h6v6" />
					</svg>
				</Link>

				<div
					className="audience-toggle-group"
					role="group"
					aria-label="Choisir un profil"
				>
					<button
						type="button"
						className={`audience-toggle-option ${currentAudience === "tech" ? "active" : ""}`}
						aria-pressed={currentAudience === "tech"}
						onClick={() => handleAudienceSwitch("tech")}
					>
						Tech
					</button>
					<button
						type="button"
						className={`audience-toggle-option ${currentAudience === "business" ? "active" : ""}`}
						aria-pressed={currentAudience === "business"}
						onClick={() => handleAudienceSwitch("business")}
					>
						Business
					</button>
				</div>

				<button
					className={`burger-menu ${isMenuOpen ? "active" : ""}`}
					onClick={toggleMenu}
					aria-label="Toggle menu"
					type="button"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<ul className={isMenuOpen ? "active" : ""}>
					{isHome ? (
						<>
							<li>
								<a href="#about" onClick={(e) => handleNavClick(e, "about")}>
									À propos
								</a>
							</li>
							<li>
								<a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>
									Compétences
								</a>
							</li>
							<li>
								<a
									href="#projects"
									onClick={(e) => handleNavClick(e, "projects")}
								>
									Projets
								</a>
							</li>
							<li>
								<a
									href="#contact"
									onClick={(e) => handleNavClick(e, "contact")}
								>
									Contact
								</a>
							</li>
						</>
					) : (
						<li>
							<Link to="/" onClick={() => setIsMenuOpen(false)}>
								Accueil
							</Link>
						</li>
					)}
					{currentAudience !== "business" && (
						<li>
							<Link to="/cv" onClick={() => setIsMenuOpen(false)}>
								CV
							</Link>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
