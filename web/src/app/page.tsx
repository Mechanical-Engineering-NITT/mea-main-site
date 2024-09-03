import Hero from "@components/Landing/Hero";
import Login from "@components/Landing/Login";
import Logout from "@components/Landing/Logout";
import Navbar from "@components/Landing/NavBar";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
	const session = await getServerSession();

	return (
		<div className="flex flex-col">
			<Navbar />
			<Hero />
			<Login />
			<Logout />
			{session?.user?.email}
			{session?.user?.email && (
				<Link href={"/study"}>Study Materials</Link>
			)}
		</div>
	);
}
