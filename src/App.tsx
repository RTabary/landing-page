import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import CV from "./pages/CV";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AudienceSelector from "./components/AudienceSelector";
import Home from "./pages/Home";
import { Audience } from "./types/Audience.type";

type StoredAudience = Audience | null;

function isAudience(value: string | null): value is Audience {
	return value === "tech" || value === "business";
}

function App(): JSX.Element {
	const [audience, setAudience] = useState<StoredAudience>(null);
	const [showSelector, setShowSelector] = useState(true);

	useEffect(() => {
		const savedAudience = localStorage.getItem("audience");
		if (isAudience(savedAudience)) {
			setAudience(savedAudience);
			setShowSelector(false);
		}
	}, []);

	const handleSelectAudience = (audienceType: Audience) => {
		setAudience(audienceType);
		localStorage.setItem("audience", audienceType);
		setShowSelector(false);
	};

	if (showSelector && !audience) {
		return <AudienceSelector onSelectAudience={handleSelectAudience} />;
	}

	return (
		<>
			<Navbar audience={audience} onAudienceChange={handleSelectAudience} />
			<Routes>
				<Route path="/" element={<Home audience={audience} />} />
				<Route path="/cv" element={<CV audience={audience} />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
