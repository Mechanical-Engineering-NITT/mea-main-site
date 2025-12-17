import { getMiscellaneous } from "@actions/cms";
import { getUser } from "@actions/user";
import Table from "@components/Miscellaneous/Table";
import { redirect } from "next/navigation";
import BackButton from "@components/Common/BackButton";
import Navigation from "@components/Landing/Navigation";

export default async function Page({
	params,
}: {
	params: { sem: string; course: string };
}) {
	const user = await getUser();
	if (!user)
		redirect(
			`/?callbackUrl=/study/core/${params.sem}/${params.course}/misc`,
		);

	const miscellaneous = await getMiscellaneous(decodeURI(params.course));

	return (
		<>
			<Navigation isUser={true} />
			<div className=" text-white bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col h-screen w-screen overflow-y-auto px-5 py-10">
				<div className="mt-16 w-full max-w-7xl mx-auto flex items-center relative">
					<BackButton
						href={`/study/core/${params.sem}/${params.course}`}
					/>
					<span className="font-outfit text-4xl font-bold mx-auto text-center">
						{decodeURI(params.course)}
					</span>
				</div>
				<Table miscellaneous={miscellaneous} />
			</div>
		</>
	);
}
