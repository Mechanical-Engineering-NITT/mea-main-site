import { ProjectsSchema } from "@actions/cms/schemas";
import { z } from "zod";

export default function Projects({
	entries,
}: {
	entries: z.infer<typeof ProjectsSchema>;
}) {
	return (
		<>
			<div className="text-white bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col items-center h-screen w-screen overflow-y-auto px-2 py-10">
				<span className="text-4xl font-bold mb-5 mt-16 underline pointer-events-none font-montesrrat">
					PROJECTS
				</span>
				<span className="text-xl sm:text-2xl text-center text-nowrap font-semibold mb-5 font-montesrrat">
					Professor Research Interests
				</span>
				<div className="w-full md:mx-auto xl:max-w-[90%] font-montesrrat">
					<div
						className="grid justify-items-center overflow-x-auto w-full px-5 py-5 gap-4"
						style={{
							gridTemplateColumns:
								"repeat(3, minmax(200px, 1fr))",
						}}
					>
						<div className="flex flex-row justify-center col-span-3 w-full pointer-events-none">
							<div className="bg-gray-200 p-4 rounded-l-lg w-full h-[50px] flex items-center justify-center mb-1">
								<h2 className="text-md font-semibold text-black">
									Professor
								</h2>
							</div>
							<div className="bg-gray-200 p-4 w-full h-[50px] flex items-center justify-center mb-1">
								<h2 className="text-md font-semibold text-black">
									Email ID
								</h2>
							</div>
							<div className="bg-gray-200 p-4 rounded-r-lg w-full h-[50px] flex items-center justify-center mb-1">
								<h2 className="text-md font-semibold text-black">
									Research Interests
								</h2>
							</div>
						</div>

						{entries.map((entry) => (
							<div
								key={entry.id}
								className="flex flex-row justify-center col-span-3 my-0.5 w-full hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg rounded-lg border border-white"
							>
								<div className="p-4 rounded-l-lg w-full h-[50px] flex items-start justify-center">
									<h2 className="text-md font-semibold text-white hover:underline hover:cursor-pointer">
										{entry.professor}
									</h2>
								</div>
								<div className="p-4 w-full h-[50px] flex items-start justify-center">
									<h2 className="text-md font-semibold text-white hover:underline hover:cursor-pointer">
										{entry.emailID}
									</h2>
								</div>
								<div className="p-4 rounded-r-lg w-full max-h-[200px] flex items-start justify-center overflow-y-auto">
									<h2 className="text-md font-semibold text-white text-justify">
										{entry.researchInterests}
									</h2>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
