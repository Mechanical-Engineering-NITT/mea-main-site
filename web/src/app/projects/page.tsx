export const dynamic = "force-dynamic";

import Projects from "@components/Landing/Projects";
import { getProjects } from "@actions/cms";
import { getUser } from "@actions/user";
import Navigation from "@components/Landing/Navigation";

export default async function Page() {
	const entries = await getProjects();
	const user = await getUser();
	return (
		<>
			<Navigation isUser={user !== undefined} />
			<Projects entries={entries} />
		</>
	);
}
