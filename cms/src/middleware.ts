import axios from "axios";

export const authenticateUser = async (req, res, next) => {
  try {
    const cookie = req.headers.cookie as string;
    const isAuthToken = cookie.includes("next-auth.session-token");
    if (!isAuthToken) {
      next();
      return;
    }
    const sessionResponse = await axios.get(
      `http://localhost:3000/api/auth/session`,
      {
        headers: {
          Cookie: req.headers.cookie,
        },
      },
    );
    req.webClientUser = sessionResponse.data.user;
    next();
  } catch (error) {
    console.error("Next Auth Authentication Error:", error);
    next();
  }
};
