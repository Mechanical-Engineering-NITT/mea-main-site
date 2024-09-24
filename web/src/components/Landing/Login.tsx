"use client";

import { signIn } from "next-auth/react";

export default function Login() {
	return (
		<div
			onClick={() => {
				signIn("dauth");
			}}
			className=" font-montesrrat mt-28 px-5 py-2 cursor-pointer bg-green-600 text-white font-semibold rounded-md"
		>
			Login with DAuth
		</div>
	);
}
