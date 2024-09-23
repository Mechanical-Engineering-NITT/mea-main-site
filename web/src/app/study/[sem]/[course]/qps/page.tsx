import { CMS_URL } from "@/utils/config";
import { getQuestionPapers } from "@actions/cms";
import { getUser } from "@actions/user";
import Link from "next/link";
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
		<div className="flex flex-col">
			{questionPapers.map((qp, i) => {
				return (
					<div key={i}>
						<Link target="_blank" href={`${CMS_URL}${qp.url}`}>
							{qp.filename} {qp.year.slice(0, 4)}
						</Link>
					</div>
				);
			})}
		</div>
	);
}
