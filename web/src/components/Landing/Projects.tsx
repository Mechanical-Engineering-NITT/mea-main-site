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
				<span className="text-4xl font-bold mb-5 mt-16 underline pointer-events-none font-montserrat">
					PROJECTS
				</span>
				<span className="text-xl sm:text-2xl text-center text-nowrap font-semibold mb-5 font-montserrat">
					Professor Research Interests
				</span>
				<div className="w-full md:mx-auto xl:max-w-[90%] font-montserrat">
					<div
						className="grid justify-items-center overflow-x-auto w-full px-5 py-5 gap-4"
						style={{
							gridTemplateColumns:
								"repeat(4, minmax(200px, 1fr))",
						}}
					>
						<div className="flex flex-row justify-center col-span-4 w-full pointer-events-none">
							<div className="bg-gray-200 p-4 rounded-l-lg basis-1/4 h-[50px] flex items-center justify-center mb-1">
								<h2 className="text-md font-semibold text-black">
									Professor
								</h2>
							</div>
							<div className="bg-gray-200 p-4 basis-1/4 h-[50px] flex items-center justify-center mb-1">
								<h2 className="text-md font-semibold text-black">
									Email ID
								</h2>
							</div>
							<div className="bg-gray-200 p-4 basis-1/4 h-[50px] flex items-center justify-center mb-1">
								<h2 className="text-md font-semibold text-black">
									Research Interests
								</h2>
							</div>
							<div className="bg-gray-200 p-4 rounded-r-lg basis-1/4 h-[50px] flex items-center justify-center mb-1">
								<h2 className="text-md font-semibold text-black">
									Laboratory/Location
								</h2>
							</div>
						</div>

						{entries.map((entry) => (
							<div
								key={entry.id}
								className="flex flex-row justify-center col-span-4 my-0.5 w-full hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg rounded-lg border border-white"
							>
								<div className="p-4 rounded-l-lg basis-1/4 h-[50px] flex items-start justify-center">
									<h2 className="text-md font-semibold text-white hover:underline hover:cursor-pointer">
										{entry.professor}
									</h2>
								</div>
								<div className="p-4 basis-1/4 h-[50px] flex items-start justify-center">
									<h2 className="text-md font-semibold text-white hover:underline hover:cursor-pointer break-all text-center">
										{entry.emailID}
									</h2>
								</div>
								<div className="p-4 basis-1/4 max-h-[200px] flex items-start justify-center overflow-y-auto">
									<h2 className="text-md font-semibold text-white text-justify">
										{entry.researchInterests}
									</h2>
								</div>
								<div className="p-4 rounded-r-lg basis-1/4 max-h-[200px] flex items-start justify-center overflow-y-auto">
									<h2 className="text-md font-semibold text-white text-justify">
										{entry.laboratryOrLocation ?? ""}
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
