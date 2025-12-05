import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins";
import { AUTH_CLIENT_ID, AUTH_CLIENT_SECRET, BASE_PATH } from "@/utils/config";

export const auth = betterAuth({
	plugins: [
		genericOAuth({
			config: [
				{
					providerId: "dauth",
					authorizationUrl: "https://auth.delta.nitt.edu/authorize",
					authorizationUrlParams: {
						client_id: AUTH_CLIENT_ID,
						response_type: "code",
						grant_type: "authorization_code",
						scope: "openid email profile user",
					},
					tokenUrl: "https://auth.delta.nitt.edu/api/oauth/token",
					userInfoUrl:
						"https://auth.delta.nitt.edu/api/resources/user",
					redirectURI: BASE_PATH,
					clientId: AUTH_CLIENT_ID,
					clientSecret: AUTH_CLIENT_SECRET,
					async getToken({ code, redirectURI }) {
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
									code: code,
									grant_type: "authorization_code",
									redirect_uri: redirectURI,
								}),
							},
						);
						const tokens = await res.json();
						return {
							accessToken: tokens.access_token,
							refreshToken: tokens.refresh_token,
							accessTokenExpiresAt: new Date(
								Date.now() + tokens.expires_in * 1000,
							),
							refreshTokenExpiresAt: new Date(
								Date.now() + tokens.refresh_expires_in * 1000,
							),
							idToken: tokens.id_token,
							scopes: tokens.scope ? tokens.scope.split(" ") : [],
							tokenType: tokens.token_type,
						};
					},
				},
			],
		}),
	],
});
