import { getOEOrMinorQPs } from "@actions/cms";
import { getUser } from "@actions/user";
import Table from "@components/QuestionPapers/Table";
import { redirect } from "next/navigation";
import BackButton from "@components/Common/BackButton";
import Navigation from "@components/Landing/Navigation";

export default async function Page({
	params,
}: {
	params: { type: string; dept: string; course: string };
}) {
	if (params.type !== "oe" && params.type !== "minor") redirect("/study");

	const user = await getUser();
	if (!user)
		redirect(
			`/?callbackUrl=/study/${params.type}/${params.dept}/${params.course}/qps`,
		);

	const questionPapers = await getOEOrMinorQPs(decodeURI(params.course));

	return (
		<>
			<Navigation isUser={true} />
			<div className=" text-white bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col h-screen w-screen overflow-y-auto px-5 py-10">
				<div className="mt-16 w-full max-w-7xl mx-auto flex items-center relative">
					<BackButton
						href={`/study/${params.type}/${params.dept}/${params.course}`}
					/>
					<span className="font-outfit text-4xl font-bold mx-auto text-center">
						{decodeURI(params.course)}
					</span>
				</div>
				<Table questionPapers={questionPapers} />
			</div>
		</>
	);
}
