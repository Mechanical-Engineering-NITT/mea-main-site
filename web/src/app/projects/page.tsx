export const dynamic = "force-dynamic";

import Navbar from "@components/Landing/NavBar";
import Projects from "@components/Landing/Projects";
import { getProjects } from "@actions/cms";

export default async function Page() {
	const entries = await getProjects();
	return (
		<>
			<Navbar isUser={false} />
			<Projects entries={entries} />
		</>
	);
}
