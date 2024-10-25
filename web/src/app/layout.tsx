import type { Metadata } from "next";
import "./globals.css";
import Providers from "@utils/providers";

export const metadata: Metadata = {
	title: "MEA",
	description: "MEA",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
