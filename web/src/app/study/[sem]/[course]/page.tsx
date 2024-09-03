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

	return (
		<div className="flex flex-col">
			<Link href={`/study/${params.sem}/${params.course}/qps`}>QP</Link>
		</div>
	);
}
