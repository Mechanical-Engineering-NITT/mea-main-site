import Image from "next/image";
import Link from "next/link";
import FB from "@assets/images/Footer/Fb.png";
import IG from "@assets/images/Footer/Ig.png";
import LN from "@assets/images/Footer/In.png";

const links = [
	{
		name: "FB",
		link: "https://facebook.com/synergynitt",
		image: FB,
	},
	{
		name: "IG",
		link: "https://instagram.com/synergynitt",
		image: IG,
	},
	{
		name: "LN",
		link: "http://in.linkedin.com/company/mechanical-engineers-association-nit-trichy",
		image: LN,
	},
];

export default function Footer() {
	return (
		<div className="flex flex-col">
			<div className="bg-black text-white flex flex-col sm:flex-row">
				<div className="flex flex-col w-full sm:w-1/3 justify-center items-center py-10 gap-5">
					<span className="font-montesrrat font-bold text-2xl text-center">
						FOLLOW US ON
					</span>
					<div className="flex flex-row gap-5">
						{links.map((link) => {
							return (
								<Link
									target="_blank"
									href={link.link}
									key={link.name}
								>
									<Image
										src={link.image}
										alt={link.name}
										width={30}
										height={30}
									/>
								</Link>
							);
						})}
					</div>
				</div>
				<div className="w-full flex justify-center items-center py-10">
					<span className="font-montesrrat text-7xl font-bold text-center">
						MEA '24 - '25
					</span>
				</div>
			</div>
			<div className="text-black font-semibold bg-gradient-to-r from-[#44bcde] via-[#B4E4F1] to-[#44bcde] justify-center flex flex-row w-full py-1 font-montesrrat">
				Made with{" "}
				<span className=" animate-pulse text-red-500 mx-1">♥</span> by{" "}
				<Link
					target="_blank"
					href={
						"https://github.com/orgs/Mechanical-Engineering-NITT/people"
					}
					className="underline mx-1"
				>
					Synergy WebOps
				</Link>
			</div>
		</div>
	);
}
