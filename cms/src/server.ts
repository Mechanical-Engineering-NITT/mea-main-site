import express from "express";
import payload from "payload";
import { authenticateUser } from "./middleware";
import nodemailer from "nodemailer";

const port = 3001;

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
const app = express();

// email
const transport = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.SENDER_EMAIL,
		pass: process.env.PASSKEY,
	},
});

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
		email: {
			fromName: "CMS Admin",
			fromAddress: process.env.SENDER_EMAIL,
			transport,
		},
	});

	app.listen(port, () =>
		payload.logger.info(`Server running at http://localhost:${port}`),
	);
};

start();
