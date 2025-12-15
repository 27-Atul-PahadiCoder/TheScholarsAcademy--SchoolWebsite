import type { Express } from "express";
import express from "express";
import { requireAdmin } from "../middleware/auth.js";
import { contentRouter } from "../modules/content/content.routes.js";
import { mediaRouter } from "../modules/media/media.routes.js";
import { adminRouter } from "../modules/admin/admin.routes.js";
import { galleryRouter } from "../modules/gallery/gallery.routes.js";

export const registerRoutes = (app: Express) => {
  const api = express.Router();

  api.use("/admin", adminRouter);
  api.use("/galleries", galleryRouter);
  api.use("/content", requireAdmin, contentRouter);
  api.use("/media", requireAdmin, mediaRouter);

  app.use("/api", api);
};
