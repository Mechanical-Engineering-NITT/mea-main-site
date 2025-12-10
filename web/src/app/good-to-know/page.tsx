import { getUser } from "@/actions/user";
import Navbar from "@components/Landing/NavBar";
import { getGoodToKnow } from "@/actions/cms";

export default async function Page() {
	const user = await getUser();
	const content = await getGoodToKnow();
	return (
		<>
			<Navbar isUser={user !== undefined} />
			<div className="text-white bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col items-center h-screen w-screen overflow-y-auto px-2 py-10">
				<div className="text-4xl font-bold mb-10 mt-16 underline pointer-events-none font-montserrat">
					GOOD TO KNOW
				</div>
				<div className="w-full px-20 space-y-6">
					<div
						className="lexical-content font-montserrat"
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</div>
			</div>
		</>
	);
}
