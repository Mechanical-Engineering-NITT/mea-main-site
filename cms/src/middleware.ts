import axios from "axios";
import { WEB_URL } from "./config";

export const authenticateUser = async (req, res, next) => {
	try {
		const cookie = (req.headers.cookie as string) || "";
		if (!cookie.includes("next-auth.session-token")) {
			next();
			return;
		}
		const sessionResponse = await axios.get(`${WEB_URL}/api/auth/session`, {
			headers: {
				Cookie: req.headers.cookie,
			},
		});
		req.webClientUser = sessionResponse.data.user;
		next();
	} catch (error) {
		console.error("Next Auth Authentication Error:", error);
		next();
	}
};
