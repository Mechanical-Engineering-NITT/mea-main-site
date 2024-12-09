import { getUser } from "@actions/user";
import About from "@components/Landing/About";
import Hero from "@components/Landing/Hero";
import Highlights from "@components/Landing/Highlights";
import Navbar from "@components/Landing/NavBar";

export default async function Home() {
	const user = await getUser();

	return (
		<div className="flex flex-col">
			<Navbar isUser={user !== undefined} />
			<Hero isUser={user !== undefined} />
			<About />
			<Highlights />
		</div>
	);
}
