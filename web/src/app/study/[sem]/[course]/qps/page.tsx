import { getQuestionPapers } from "@actions/cms";
import { getUser } from "@actions/user";
import Navbar from "@components/Landing/NavBar";
import Table from "@components/QuestionPapers/Table";
import { redirect } from "next/navigation";

export default async function Page({
	params,
}: {
	params: { sem: string; course: string };
}) {
	const user = await getUser();
	if (!user) redirect("/");

	const questionPapers = await getQuestionPapers(decodeURI(params.course));

	return (
		<>
			<Navbar isUser={true} />
			<div className=" text-white bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col h-screen w-screen overflow-y-auto px-5">
				<span className=" mt-20 font-outfit text-4xl font-bold mx-auto">{`${params.course}`}</span>
				<Table questionPapers={questionPapers} />
			</div>
		</>
	);
}
