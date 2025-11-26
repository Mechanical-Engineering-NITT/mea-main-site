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
				<div className="text-4xl font-bold mb-10 mt-16 underline pointer-events-none font-montesrrat">
					GOOD TO KNOW
				</div>
				<div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center max-w-5xl font-montesrrat space-y-6 leading-10">
					<div dangerouslySetInnerHTML={{ __html: content }} />
				</div>
			</div>
		</>
	);
}
