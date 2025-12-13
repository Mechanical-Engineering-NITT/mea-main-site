import { getUser } from "@/actions/user";
import { getSemesters } from "@actions/cms";
import Link from "next/link";
import { redirect } from "next/navigation";
import BackButton from "@components/Common/BackButton";
import Navigation from "@components/Landing/Navigation";

export default async function Page() {
	const user = await getUser();
	if (!user) redirect("/?callbackUrl=/study");

	const semesters = await getSemesters();

	return (
		<>
			<Navigation isUser={true} />
			<div className=" text-white bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col items-center h-screen w-screen overflow-y-auto px-5 py-10">
				<div className="mt-16 w-full max-w-7xl mx-auto flex items-center relative justify-center">
					<BackButton href={`/`} />
					<span className="font-outfit text-4xl font-bold text-center">
						SEMESTERS
					</span>
				</div>
				{semesters.map((sem, i) => {
					return (
						<Link
							href={`/study/${sem.semester}`}
							className=" flex flex-row justify-between font-montserrat font-semibold w-full bg-white text-black mt-2 py-2 px-4 rounded-md"
							key={i}
						>
							<span>Semester {sem.semester}</span>
							<span className=" bg-blue-300 text-blue-700 rounded-full px-2 text-xs my-auto py-1">
								View
							</span>
						</Link>
					);
				})}
			</div>
		</>
	);
}
