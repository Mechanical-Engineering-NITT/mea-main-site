"use client";

import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_PATH } from "./config";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SessionProvider
				basePath={BASE_PATH !== "" ? `${BASE_PATH}/api/auth` : ""}
			>
				<ToastContainer position="bottom-right" theme="dark" />
				{children}
			</SessionProvider>
		</>
	);
}
