import { BASE_PATH, BASE_URL } from "@utils/config";
import { genericOAuthClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: `${BASE_URL + BASE_PATH}/api/auth`,
	plugins: [genericOAuthClient()],
});
