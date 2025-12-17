import { getUser } from "@actions/user";
import Link from "next/link";
import { redirect } from "next/navigation";
import BackButton from "@components/Common/BackButton";
import Navigation from "@components/Landing/Navigation";
import { getOEOrMinorCourses } from "@actions/cms";

export default async function Page({
	params,
}: {
	params: { type: string; dept: string };
}) {
	if (params.type !== "oe" && params.type !== "minor") redirect("/study");

	const user = await getUser();
	const category: { [key: string]: "OE" | "Minor" } = {
		oe: "OE",
		minor: "Minor",
	};
	if (!user) redirect(`/?callbackUrl=/study/${params.type}/${params.dept}`);

	const courses = await getOEOrMinorCourses(
		params.dept,
		category[params.type],
	);

	return (
		<>
			<Navigation isUser={true} />
			<div className=" text-white bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col items-center h-screen w-screen overflow-y-auto px-5 py-10">
				<div className="mt-16 w-full max-w-7xl mx-auto flex items-center relative justify-center">
					<BackButton href={`/study/${params.type}`} />
					<span className="font-outfit text-4xl font-bold text-center">{`${params.dept} DEPARTMENT`}</span>
				</div>
				{courses.map((course, i) => {
					return (
						<Link
							href={`/study/${params.type}/${params.dept}/${encodeURI(course.code)}`}
							className=" flex flex-row justify-between items-center font-montserrat font-semibold w-full bg-white text-black mt-2 py-2 px-4 rounded-md"
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
