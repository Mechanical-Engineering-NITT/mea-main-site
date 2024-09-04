import { getUser } from "@/actions/user";
import { getSemesters } from "@actions/cms";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
	const user = await getUser();
	if (!user) redirect("/");

	const semesters = await getSemesters();

	return (
		<div>
			{semesters.map((sem, i) => {
				return (
					<div key={i}>
						<Link href={`/study/${sem.semester}`}>
							{sem.semester}
						</Link>
					</div>
				);
			})}
		</div>
	);
}
