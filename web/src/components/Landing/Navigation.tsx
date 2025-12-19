"use client";

import mealogo from "@/assets/images/Navbar/meaLogo.png";
import clgLogo from "@/assets/images/Navbar/clgLogo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useLayoutEffect, useRef } from "react";
import x from "@/assets/images/Icons/x.svg";
import hamburger from "@/assets/images/Icons/hamburger.svg";
import { toast } from "react-toastify";
import { authClient } from "@/libs/auth-client";

export default function Navigation({ isUser }: { isUser: boolean }) {
	const [isOpen, setIsOpen] = React.useState(false);

	useLayoutEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1280) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<>
			<Navbar isUser={isUser} onOpenSidebar={() => setIsOpen(true)} />
			<Sidebar isUser={isUser} isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
}

function Sidebar({
	isUser,
	isOpen,
	setIsOpen,
}: {
	isUser: boolean;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const sideBarRef = useRef<HTMLElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const sidebar = sideBarRef.current;
		const overlay = overlayRef.current;

		if (!sidebar || !overlay) return;

		if (isOpen) {
			sidebar.style.transform = "translateX(0)";
			overlay.style.opacity = "1";
			overlay.style.pointerEvents = "auto";
		} else {
			sidebar.style.transform = "translateX(-100%)";
			overlay.style.opacity = "0";
			overlay.style.pointerEvents = "none";
		}
	}, [isOpen]);

	const navigate = useRouter();
	const searchParams = useSearchParams();
	const callback = searchParams.get("callbackUrl") || "/";
	const links = [
		{
			name: "Study Materials",
			href: "/study",
			protected: true,
		},
		{
			name: "Projects",
			href: "/projects",
			protected: false,
		},
		{
			name: "Good to Know",
			href: "/good-to-know",
			protected: false,
		},
		{
			name: "Career Craft",
			href: "/career-craft",
			protected: false,
		},
		{
			name: "Proceed",
			href: "/proceed",
			protected: false,
		},
	];
	return (
		<>
			<div
				ref={overlayRef}
				className="fixed inset-0 w-screen h-screen bg-black/40 opacity-0 pointer-events-none z-40 xl:hidden transition-opacity duration-300 ease-in-out"
				onClick={() => setIsOpen(false)}
			></div>
			<aside
				className="flex flex-col fixed max-w-80 h-screen w-screen z-50 bg-gray-100 p-0 sidebar -translate-x-full transition-transform duration-300 ease-in-out xl:hidden xl:transform-none"
				ref={sideBarRef}
			>
				<div className="flex w-full h-[70px] items-center border-b border-gray-200">
					<Link
						href={"/"}
						className="px-[15px] h-[70px] flex items-center gap-[20px] justify-start"
					>
						<div className="logoBg bg-black rounded-full max-w-[50px] max-h-[50px] h-full aspect-square flex items-center justify-center">
							<Image
								src={mealogo}
								alt="MEA LOGO"
								className="logo"
							/>
						</div>
						<div className="font-montserrat font-semibold text-2xl title">
							MEA '25
						</div>
					</Link>
					<button
						className="ml-auto h-full w-fit p-4 flex items-center justify-center shrink-0"
						onClick={() => setIsOpen(false)}
					>
						<Image
							src={x}
							alt="Close Sidebar"
							className="size-[26px]"
						/>
					</button>
				</div>
				<nav className="mt-[40px] w-full flex gap-[20px] justify-start flex-col p-0 font-montserrat text-2xl font-medium text-gray-950">
					{links.map((link, i) => (
						<div
							className="flex justify-start items-center px-[25px] gap-[10px] h-[50px] cursor-pointer hover:opacity-80"
							key={i}
							onClick={() => {
								if (link.protected && !isUser) {
									toast.error(
										"Please login to access this section",
									);
								} else {
									navigate.push(link.href);
								}
							}}
						>
							{link.name}
						</div>
					))}
				</nav>
				<div className="mt-auto mb-[84px] w-full text-center text-gray-600 font-montserrat text-xs flex items-center justify-center gap-[5px]">
					{!isUser ? (
						<>
							<p>Not Logged in?</p>
							<strong
								className="underline cursor-pointer hover:text-gray-400"
								onClick={() => {
									authClient.signIn.oauth2({
										providerId: "dauth",
										callbackURL: `${callback}`,
									});
								}}
							>
								Login with DAuth
							</strong>
						</>
					) : null}
				</div>
			</aside>
		</>
	);
}

function Navbar({
	isUser,
	onOpenSidebar,
}: {
	isUser: boolean;
	onOpenSidebar: () => void;
}) {
	const navigate = useRouter();
	const links = [
		{
			name: "Study Materials",
			href: "/study",
			protected: true,
		},
		{
			name: "Projects",
			href: "/projects",
			protected: false,
		},
		{
			name: "Good to Know",
			href: "/good-to-know",
			protected: false,
		},
		{
			name: "Career Craft",
			href: "/career-craft",
			protected: false,
		},
		{
			name: "Proceed",
			href: "/proceed",
			protected: false,
		},
	];
	return (
		<header className="absolute h-[70px] xl:h-[80px] w-screen flex items-center justify-between px-10 top-0 z-40 rounded-b-[12px] shadow-md bg-transparent backdrop-blur">
			<button
				className="openBtn flex items-center justify-center shrink-0 xl:hidden"
				onClick={onOpenSidebar}
			>
				<Image
					src={hamburger}
					alt="Open Sidebar"
					className="size-[36px] text-white"
				/>
			</button>
			<Link
				href={"/"}
				className="px-[15px] h-[70px] xl:h-[80px] flex items-center gap-[20px] justify-start"
			>
				<div className="logoBg bg-transparent rounded-full size-[70px] xl:size-[80px] flex items-center justify-center">
					<Image src={mealogo} alt="MEA LOGO" className="logo" />
				</div>
				<div className="font-montserrat font-semibold text-2xl title hidden md:flex text-white">
					MEA '25
				</div>
			</Link>

			{links.map((link, i) => (
				<div key={i} className="hidden xl:block">
					<div
						onClick={() => {
							if (link.protected && !isUser) {
								toast.error(
									"Please login to access this section",
								);
							} else {
								navigate.push(link.href);
							}
						}}
						className="text-white cursor-pointer hover:underline transition-all duration-150 ease-in-out text-[24px] font-montserrat font-semibold"
					>
						{link.name}
					</div>
				</div>
			))}

			<Link href={"/"}>
				<Image
					src={clgLogo}
					alt="NITT LOGO"
					className="size-[70px] xl:size-[80px]"
				/>
			</Link>
		</header>
	);
}
