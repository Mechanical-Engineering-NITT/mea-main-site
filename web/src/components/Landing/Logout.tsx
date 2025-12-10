"use client";
import { authClient } from "@/libs/auth-client";

export default function Logout() {
	return (
		<div
			onClick={() => {
				authClient.signOut().then(() => {
					window.location.reload();
				});
			}}
			className=" font-montserrat mt-28 px-5 py-2 cursor-pointer bg-red-600 text-white font-semibold rounded-md"
		>
			Logout
		</div>
	);
}
