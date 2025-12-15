import { Router } from "express";
import { MediaController } from "./media.controller.js";
import { upload } from "../../config/storage.js";

const router = Router();

router.get("/", MediaController.list);
router.post("/upload", upload.single("file"), MediaController.upload);

router.patch("/rename", MediaController.rename);
router.patch("/change-path", MediaController.changePath);
router.delete("/delete", MediaController.delete);


export const mediaRouter = router;
