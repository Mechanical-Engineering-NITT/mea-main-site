"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
	return (
		<div
			onClick={() => {
				signOut();
			}}
			className=" font-montesrrat mt-28 px-5 py-2 cursor-pointer bg-red-600 text-white font-semibold rounded-md"
		>
			Logout
		</div>
	);
}
