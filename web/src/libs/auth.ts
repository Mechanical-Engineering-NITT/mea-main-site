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
					redirectUrl: BASE_PATH,
					clientId: AUTH_CLIENT_ID,
					clientSecret: AUTH_CLIENT_SECRET,
					tokenUrlParams: {
						async request(context) {
							const res = await fetch(context.tokenUrl, {
								method: "POST",
								headers: {
									"Content-Type":
										"application/x-www-form-urlencoded",
								},
								body: new URLSearchParams({
									client_id: context.clientId,
									client_secret: context.clientSecret,
									code: context.params.code || "code",
									grant_type: "authorization_code",
									redirect_uri: `${context.provider.callbackUrl}`,
								}),
							});
							const tokens = await res.json();
							return { tokens };
						},
					},
				},
			],
		}),
	],
});
