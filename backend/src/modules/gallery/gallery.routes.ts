import { Router } from "express";
import { upload } from "../../config/storage.js";
import { requireAdmin } from "../../middleware/auth.js";
import { GalleryController } from "./gallery.controller.js";

const router = Router();

router.get("/:slug", GalleryController.listPublic);
router.get("/:slug/admin", requireAdmin, GalleryController.listAdmin);
router.post(
  "/:slug/photos",
  requireAdmin,
  upload.single("file"),
  GalleryController.addPhoto
);
router.patch(
  "/:slug/photos/:photoId",
  requireAdmin,
  GalleryController.updatePhoto
);
router.delete(
  "/:slug/photos/:photoId",
  requireAdmin,
  GalleryController.deletePhoto
);

export const galleryRouter = router;
