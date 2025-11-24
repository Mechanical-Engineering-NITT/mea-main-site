"use client";
import { authClient } from "@/libs/auth-client";
import { useSearchParams } from "next/navigation";

export default function Login() {
	const searchParams = useSearchParams();
	const callback = searchParams.get("callbackUrl") || "/";
	return (
		<div
			onClick={() => {
				authClient.signIn.oauth2({
					providerId: "dauth",
					callbackURL: `${callback}`,
				});
			}}
			className=" font-montesrrat mt-28 px-5 py-2 cursor-pointer bg-green-600 text-white font-semibold rounded-md"
		>
			Login with DAuth
		</div>
	);
}
