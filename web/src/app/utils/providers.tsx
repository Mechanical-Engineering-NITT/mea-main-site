"use client";

import { createContext, useState } from "react";

export const SideBarContext = createContext<{
	isSideBarOpen: boolean;
	setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> | null;
}>({
	isSideBarOpen: false,
	setIsSideBarOpen: null,
});

export function Providers({ children }: { children: React.ReactNode }) {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);

	return (
		<SideBarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
			{children}
		</SideBarContext.Provider>
	);
}
