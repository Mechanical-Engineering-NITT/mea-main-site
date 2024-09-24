import { getCourses } from "@actions/cms";
import { getUser } from "@actions/user";
import Navbar from "@components/Landing/NavBar";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { sem: string } }) {
	const user = await getUser();
	if (!user) redirect("/");

	const courses = await getCourses(decodeURI(params.sem));

	return (
		<>
			<Navbar isUser={user !== undefined} />
			<div className=" text-white bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col items-center h-screen w-screen overflow-y-auto px-5">
				<span className=" mt-20 font-outfit text-4xl font-bold">{`SEMESTER ${params.sem}`}</span>
				{courses.map((course, i) => {
					return (
						<Link
							href={`/study/${params.sem}/${course.code}`}
							className=" flex flex-row justify-between items-center font-montesrrat font-semibold w-full bg-white text-black mt-2 py-2 px-4 rounded-md"
							key={i}
						>
							<span>{course.name}</span>
							<span className=" bg-blue-300 text-blue-700 rounded-full px-2 text-xs my-auto py-1">
								{course.code}
							</span>
						</Link>
					);
				})}
			</div>
		</>
	);
}
