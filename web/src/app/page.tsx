import { getUser } from "@actions/user";
import Hero from "@components/Landing/Hero";
import Navbar from "@components/Landing/NavBar";

export default async function Home() {
	const user = await getUser();

	return (
		<div className="flex flex-col">
			<Navbar isUser={user !== undefined} />
			<Hero isUser={user !== undefined} />
		</div>
	);
}
