import express from "express";
import payload from "payload";
import { authenticateUser } from "./middleware";

const port = 3001;

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
	res.redirect("/admin");
});

app.use(authenticateUser);

const start = async () => {
	// Initialize Payload
	await payload.init({
		secret: process.env.PAYLOAD_SECRET,
		express: app,
		onInit: async () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
		},
	});

	app.listen(port, () =>
		payload.logger.info(`Server running at http://localhost:${port}`),
	);
};

start();
