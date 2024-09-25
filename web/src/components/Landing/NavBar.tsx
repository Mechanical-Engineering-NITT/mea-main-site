"use client";

import Image from "next/image";
import meaLogo from "@assets/images/Navbar/meaLogo.png";
import clgLogo from "@assets/images/Navbar/clgLogo.png";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

const links = [
	{
		name: "Study Materials",
		href: "/study",
		protected: true,
	},
];

export default function Navbar({ isUser }: { isUser: boolean }) {
	const navigate = useRouter();

	return (
		<div className="fixed h-fit w-screen backdrop-blur flex justify-around px-1 sm:px-2 lg:px-3 items-center top-0 z-50 font-montesrrat text-base sm:text-lg lg:text-xl xl:text-2xl text-white font-medium flex-wrap">
			<Link href={"/"}>
				<Image
					src={meaLogo}
					alt="MEA LOGO"
					className="size-16 lg:size-20 xl:size-20"
				/>
			</Link>
			{links.map((link, i) => (
				<div key={i}>
					<div
						onClick={() => {
							if (link.protected && !isUser) {
								toast.error(
									"Please login to access this section",
								);
							} else {
								console.log(link.href);
								navigate.push(link.href);
							}
						}}
						className="cursor-pointer"
					>
						{link.name}
					</div>
				</div>
			))}
			<Link href={"/"}>
				<Image
					src={clgLogo}
					alt="NITT LOGO"
					className="size-16 lg:size-20 xl:size-20"
				/>
			</Link>
		</div>
	);
}
