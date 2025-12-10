"use client";

import { InitiativesSchema } from "@actions/cms/schemas";
import Blush from "@assets/images/Common/blush.png";
import Image from "next/image";
import { z } from "zod";

export default function Initiatives({
	initiatives,
}: {
	initiatives: z.infer<typeof InitiativesSchema>;
}) {
	return (
		<div className="min-h-screen w-screen flex flex-col relative overflow-hidden">
			{/* Section Heading */}
			<span className="text-customOrange font-outfit font-bold text-7xl w-full text-center mt-10">
				Our Initiatives
			</span>

			{/* Initiatives */}
			<div className="flex flex-wrap justify-center gap-8 p-10 w-full">
				{initiatives.map((initiative) => (
					<div
						key={initiative.id}
						className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition duration-300 flex flex-col items-center text-center min-w-80 max-h-96"
					>
						<h3 className="text-xl font-bold text-customBlue mb-3">
							{initiative.title}
						</h3>

						<div className="overflow-y-auto">
							<p className="text-gray-600 font-montserrat">
								{initiative.description}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* Background Decorations */}
			<Image
				src={Blush}
				alt="Blush"
				className="absolute h-[90%] object-fit -left-28 sm:-left-16 -z-50"
			/>
			<Image
				src={Blush}
				alt="Blush"
				className="absolute h-[90%] object-fit -right-28 sm:-right-16 rotate-180 -z-50"
			/>
		</div>
	);
}
