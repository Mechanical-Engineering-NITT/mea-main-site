import { getUser } from "@/actions/user";
import { getCareerCraft } from "@/actions/cms";
import Navigation from "@components/Landing/Navigation";

export default async function Page() {
	const user = await getUser();
	const content = await getCareerCraft();
	return (
		<>
			<Navigation isUser={user !== undefined} />
			<div className="text-white bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col items-center h-screen w-screen overflow-y-auto px-2 py-10">
				<div className="text-4xl font-bold mb-10 mt-16 underline pointer-events-none font-montserrat">
					CAREER CRAFT
				</div>
				<div className="w-full px-12 lg:px-20 space-y-6">
					<div
						className="lexical-content font-montserrat"
						dangerouslySetInnerHTML={{
							__html: content.replace(
								/<a /g,
								'<a target="_blank" rel="noopener noreferrer" ',
							),
						}}
					/>
				</div>
			</div>
		</>
	);
}
