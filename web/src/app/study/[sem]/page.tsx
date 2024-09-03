import { getCourses } from "@actions/cms";
import { getUser } from "@actions/user";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { sem: string } }) {
	const user = await getUser();
	if (!user) redirect("/");

	const courses = await getCourses(decodeURI(params.sem));

	return (
		<div>
			{courses.map((course, i) => {
				return (
					<div key={i}>
						<Link href={`/study/${params.sem}/${course.code}`}>
							{course.code} - {course.name} -{" "}
							{course.semester.semester}
						</Link>
					</div>
				);
			})}
		</div>
	);
}
