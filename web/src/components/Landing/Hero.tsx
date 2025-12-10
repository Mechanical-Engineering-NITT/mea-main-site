import Image from "next/image";
import MEA from "@assets/images/Hero/mea.png";
import Login from "./Login";
import Logout from "./Logout";

export default async function Hero(props: { isUser: boolean }) {
	return (
		<div className="relative w-screen h-screen bg-cover bg-center">
			<div className="absolute h-screen w-screen">
				<Image
					src={MEA}
					alt="MEA"
					className="h-full w-full object-cover"
				/>
			</div>
			<div className="absolute  text-white text-center h-screen w-screen flex flex-col justify-center items-center">
				<span className="font-outfit text-7xl sm:text-8xl lg:text-9xl xl:text-9xl font-semibold">{`MEA '${new Date().getFullYear().toString().slice(-2)}`}</span>
				<span className="mt-4 font-montserrat text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal">
					Mechanical Engineering Association
				</span>
				<span className="mt-2 font-montserrat text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal">
					NIT Trichy
				</span>
				{!props.isUser ? <Login /> : <Logout />}
			</div>
		</div>
	);
}
