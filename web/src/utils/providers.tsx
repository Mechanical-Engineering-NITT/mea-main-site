"use client";

import { authClient } from "@/libs/auth-client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }: { children: React.ReactNode }) {
	authClient.useSession();

	return (
		<>
			<ToastContainer position="bottom-right" theme="dark" />
			{children}
		</>
	);
}
