import Navbar from "@components/Landing/NavBar";
import Projects from "@components/Landing/Projects";
import { getProjects } from "@actions/cms";

export default async function Page() {
	const entries = await getProjects();
	console.log(entries);
	return (
		<>
			<Navbar isUser={true} />
			<Projects entries={entries} />
		</>
	);
}
