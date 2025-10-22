import { getUser } from "@actions/user";
import Navbar from "@components/Landing/NavBar";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page({
	params,
}: {
	params: { sem: string; course: string };
}) {
	const user = await getUser();
	if (!user) redirect(`/?callbackUrl=/study/${params.sem}/${params.course}`);

	const items = [
		{
			name: "Question Papers",
			link: `/study/${params.sem}/${params.course}/qps`,
		},
		{
			name: "Books",
			link: `/study/${params.sem}/${params.course}/books`,
		},
		{
			name: "Miscellaneous",
			link: `/study/${params.sem}/${params.course}/misc`,
		},
	];

	return (
		<>
			<Navbar isUser={true} />
			<div className=" text-white bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col items-center h-screen w-screen overflow-y-auto px-5 py-10">
				<span className=" mt-16 font-outfit text-4xl font-bold">{`${params.course}`}</span>
				{items.map((item, i) => {
					return (
						<Link
							href={item.link}
							className=" flex flex-row justify-between items-center font-montesrrat font-semibold w-full bg-white text-black mt-2 py-2 px-4 rounded-md"
							key={i}
						>
							<span>{item.name}</span>
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
