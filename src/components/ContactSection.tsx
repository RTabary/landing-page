import { SocialLinks } from "./SocialLinks";

type ContactSectionProps = {
	sectionId?: string;
	title: string;
	intro: string;
	strokeColor?: string;
	showCvDownload?: boolean;
};

export function ContactSection({
	sectionId = "contact",
	title,
	intro,
	strokeColor = "#5B7FFF",
	showCvDownload = true,
}: Readonly<ContactSectionProps>) {
	return (
		<section id={sectionId}>
			<div className="container">
				<h2 className="section-title">{title}</h2>
				<div className="contact-content">
					<p
						style={{
							color: "var(--gray)",
							fontSize: "1.1rem",
							marginBottom: "2rem",
						}}
					>
						{intro}
					</p>
					<div className="contact-info">
						<div className="contact-item">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
									stroke={strokeColor}
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M22 6l-10 7L2 6"
									stroke={strokeColor}
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<a href="mailto:tabaryr@gmail.com">tabaryr@gmail.com</a>
						</div>
						<div className="contact-item">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
									stroke={strokeColor}
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<a href="tel:+33760397531">07 60 39 75 31</a>
						</div>
						<div className="contact-item">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
									stroke={strokeColor}
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<circle
									cx="12"
									cy="10"
									r="3"
									stroke={strokeColor}
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span>Lille, France</span>
						</div>
					</div>
					<div className="company-info">
						<p>
							<strong>TARS SASU</strong>
							<br />
							SIRET: 904 527 868 00023
						</p>
					</div>
					<SocialLinks showCvDownload={showCvDownload} />
				</div>
			</div>
		</section>
	);
}
