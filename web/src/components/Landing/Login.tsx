"use client";

import { signIn } from "next-auth/react";

export default function Login() {
	return (
		<div
			onClick={() => {
				signIn("dauth");
			}}
		>
			Login
		</div>
	);
}
