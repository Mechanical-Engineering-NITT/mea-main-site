import Image from "next/image";
import Blush from "@assets/images/Common/blush.png";
import { getAbout } from "@actions/cms";

export default async function About() {
	const content = await getAbout();

	return (
		<div className=" relative w-screen overflow-x-hidden h-screen flex flex-col items-center justify-center">
			<Image
				src={Blush}
				alt="Blush"
				className=" absolute h-[90%] object-fit -left-28 sm:-left-16 -z-50"
			/>
			<Image
				src={Blush}
				alt="Blush"
				className=" absolute h-[90%] object-fit -right-28 sm:-right-16 rotate-180 -z-50"
			/>
			<span className="text-customOrange font-outfit font-bold text-7xl">
				About Us
			</span>
			<div className=" mt-5 w-[80%] p-10 border-2 border-black font-montesrrat">
				{content}
			</div>
		</div>
	);
}
