"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
	return (
		<div
			onClick={() => {
				signOut();
			}}
		>
			Logout
		</div>
	);
}
