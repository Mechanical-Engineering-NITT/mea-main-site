import { AUTH_CLIENT_ID, AUTH_CLIENT_SECRET } from "@/utils/config";
import NextAuth from "next-auth";

const handler = NextAuth({
	pages: {
		signIn: "/",
		signOut: "/",
		error: "/",
	},
	callbacks: {
		async redirect({ baseUrl }) {
			return baseUrl;
		},
	},
	providers: [
		{
			id: "dauth",
			name: "DAuth",
			type: "oauth",
			authorization: {
				url: "https://auth.delta.nitt.edu/authorize",
				params: {
					client_id: AUTH_CLIENT_ID,
					redirect_uri:
						"http://localhost:3000/api/auth/callback/dauth",
					response_type: "code",
					grant_type: "authorization_code",
					state: "happycoding",
					scope: "openid email profile user",
					nonce: "happycoding",
				},
			},
			token: {
				async request(context) {
					const res = await fetch(
						"https://auth.delta.nitt.edu/api/oauth/token",
						{
							method: "POST",
							headers: {
								"Content-Type":
									"application/x-www-form-urlencoded",
							},
							body: new URLSearchParams({
								client_id: AUTH_CLIENT_ID,
								client_secret: AUTH_CLIENT_SECRET,
								grant_type: "authorization_code",
								code: context.params.code || "code",
								redirect_uri:
									"http://localhost:3000/api/auth/callback/dauth",
							}),
						},
					);
					const tokens = await res.json();
					return { tokens };
				},
			},
			userinfo: "https://auth.delta.nitt.edu/api/resources/user",
			profile(profile) {
				return {
					id: profile.sub,
					name: profile.name,
					email: profile.email,
				};
			},
			clientId: AUTH_CLIENT_ID,
			clientSecret: AUTH_CLIENT_SECRET,
		},
	],
});

export { handler as GET, handler as POST };
