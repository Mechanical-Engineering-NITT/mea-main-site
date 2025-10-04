export const dynamic = "force-dynamic";

import Navbar from "@components/Landing/NavBar";
import Projects from "@components/Landing/Projects";
import { getProjects } from "@actions/cms";
import { getUser } from "@actions/user";

export default async function Page() {
	const entries = await getProjects();
	const user = await getUser();
	return (
		<>
			<Navbar isUser={user !== undefined} />
			<Projects entries={entries} />
		</>
	);
}
