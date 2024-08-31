import Link from "next/link";
import Image from "next/image";
import meaLogo from "@assets/images/Navbar/meaLogo.png";
import clgLogo from "@assets/images/Navbar/clgLogo.png";

const links = [
	{
		name: "Synergy",
		href: "/",
	},
	{
		name: "Projects",
		href: "/",
	},
	{
		name: "Study Materials",
		href: "/",
	},
	{
		name: "Good to Know",
		href: "/",
	},
	{
		name: "FAQs",
		href: "/",
	},
];

const Navbar = () => {
	return (
		<div className="fixed h-fit w-screen backdrop-blur flex justify-around px-1 sm:px-2 lg:px-3 items-center top-0 z-50 font-montesrrat text-base sm:text-lg lg:text-xl xl:text-2xl text-white font-medium flex-wrap">
			<div>
				<Image
					src={meaLogo}
					alt="MEA LOGO"
					className="size-16 lg:size-20 xl:size-20"
				/>
			</div>
			{links.map((link, i) => (
				<div key={i}>
					<Link href={link.href}>{link.name}</Link>
				</div>
			))}
			<div>
				<Image
					src={clgLogo}
					alt="NITT LOGO"
					className="size-16 lg:size-20 xl:size-20"
				/>
			</div>
		</div>
	);
};
export default Navbar;
