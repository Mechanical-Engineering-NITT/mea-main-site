import express from "express";
import payload from "payload";

const port = 3001;

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: "Hello_world",
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(port, () =>
    payload.logger.info(`Server running at http://localhost:${port}`),
  );
};

start();
