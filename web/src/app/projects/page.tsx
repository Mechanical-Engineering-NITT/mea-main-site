import Navbar from "@components/Landing/NavBar";
import { MailIcon } from "lucide-react";

export default async function Page() {
	return (
		<>
			<Navbar isUser={true} />
			<div className="text-white bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col items-center h-screen w-screen overflow-y-auto px-5 py-10">
				<span className="font-mono text-4xl font-bold mb-5 mt-16 underline">
					PROJECTS
				</span>
				<span className="text-2xl font-semibold mb-5">
					Professor Research Interests
				</span>
				<div className="flex flex-row gap-4 mb-2 items-center justify-center border px-5 h-[50px] py-6 rounded-lg shadow-xl">
					<span className="text-xl font-sans w-[300px] text-center text-white">
						Professor
					</span>
					<span className="text-xl font-sans w-[300px] text-center text-white">
						Email ID
					</span>
					<span className="text-xl font-sans w-[300px] text-center text-white">
						Research Interests
					</span>
				</div>
				<div className="grid grid-cols-1 gap-1">
					<div className="flex flex-row gap-4 mb-3 items-start justify-center py-2 border px-5 rounded-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-200 ease-in-out">
						<div className="text-lg font-semibold w-[300px] text-center p-2 h-full">
							<span className="hover:underline hover:opacity-80 cursor-pointer">
								abc xyz
							</span>
						</div>
						<div className="text-lg font-semibold w-[300px] text-center flex gap-4 justify-center p-2 h-full">
							<span className="hover:underline hover:opacity-80 cursor-pointer flex justify-center items-center gap-2 h-fit">
								<MailIcon />
								abc@email.com
							</span>
						</div>
						<div className="text-lg font-semibold w-[300px] text-justify text-wrap p-2 h-full">
							<span>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Iusto dolores, optio doloribus
								excepturi cum odit quis adipisci sed maiores
								omnis tempore assumenda nobis amet quam fugiat
								officiis iste ipsa qui?
							</span>
						</div>
					</div>
					<div className="flex flex-row gap-4 mb-3 items-start justify-center py-2 border px-5 rounded-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-200 ease-in-out">
						<div className="text-lg font-semibold w-[300px] text-center p-2 h-full">
							<span className="hover:underline hover:opacity-80 cursor-pointer">
								abc xyz
							</span>
						</div>
						<div className="text-lg font-semibold w-[300px] text-center flex gap-4 justify-center p-2 h-full">
							<span className="hover:underline hover:opacity-80 cursor-pointer flex justify-center items-center gap-2 h-fit">
								<MailIcon />
								abc@email.com
							</span>
						</div>
						<div className="text-lg font-semibold w-[300px] text-justify text-wrap p-2 h-full">
							<span>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Iusto dolores, optio doloribus
								excepturi cum odit quis adipisci sed maiores
								omnis tempore assumenda nobis amet quam fugiat
								officiis iste ipsa qui?
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
