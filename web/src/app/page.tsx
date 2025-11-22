import { getHighlights, getInitiatives } from "@actions/cms";
import { getUser } from "@actions/user";
import Highlights from "@components/Landing/Highlights";
import About from "@components/Landing/About";
import Initiatives from "@components/Landing/Initiatives";
import Footer from "@components/Landing/Footer";
import Hero from "@components/Landing/Hero";
import Navbar from "@components/Landing/NavBar";

export default async function Home() {
	const user = await getUser();
	const highlights = await getHighlights();
	const initiatives = await getInitiatives();

	console.log(user);

	return (
		<div className="flex flex-col">
			<Navbar isUser={user !== null} />
			<Hero isUser={user !== null} />
			<Highlights content={highlights} />
			<About />
			<Initiatives initiatives={initiatives} />
			<Footer />
		</div>
	);
}
