import { getBooks } from "@actions/cms";
import { getUser } from "@actions/user";
import Table from "@components/Books/Table";
import Navbar from "@components/Landing/NavBar";
import { redirect } from "next/navigation";

export default async function Page({
	params,
}: {
	params: { sem: string; course: string };
}) {
	const user = await getUser();
	if (!user)
		redirect(`/?callbackUrl=/study/${params.sem}/${params.course}/books`);

	const books = await getBooks(decodeURI(params.course));

	return (
		<>
			<Navbar isUser={true} />
			<div className=" text-white bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col h-screen w-screen overflow-y-auto px-5 py-10">
				<span className=" mt-16 font-outfit text-4xl font-bold mx-auto">{`${params.course}`}</span>
				<Table books={books} />
			</div>
		</>
	);
}
