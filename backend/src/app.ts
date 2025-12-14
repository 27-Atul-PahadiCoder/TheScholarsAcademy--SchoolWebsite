import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { registerRoutes } from "./routes";
import { errorHandler } from "./middleware/errorHandler";
import { loadEnv, env } from "./config/env";

loadEnv();

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.ADMIN_UI_ORIGIN?.split(",") ?? ["*"] }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Serve static files from the uploads directory
app.use("/uploads", express.static(env.MEDIA_DIR));

registerRoutes(app);
app.use(errorHandler);

export { app };
