import { Router } from "express";
import { ContentController } from "./content.controller.js";
import { validateRequest } from "../../middleware/validateRequest.js";
import { upsertContentSchema } from "./content.model.js";

const router = Router();

router.get("/", ContentController.list);
router.get("/:slug", ContentController.get);
router.put(
  "/:slug",
  validateRequest(upsertContentSchema),
  ContentController.upsert
);

export const contentRouter = router;
