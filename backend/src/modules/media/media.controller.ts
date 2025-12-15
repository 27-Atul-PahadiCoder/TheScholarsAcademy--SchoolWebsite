import type { Request, Response } from "express";
import { sendSuccess } from "../../utils/http.js";
import { MediaService } from "./media.service.js";
import { logger } from "../../utils/logger.js";

let service: MediaService;

export const initMediaController = () => {
  service = new MediaService();
};

export const MediaController = {
  list: async (_req: Request, res: Response) => {
    const items = await service.listMedia();
    return sendSuccess(res, items);
  },
  upload: async (req: Request, res: Response) => {
    logger.info({ file: req.file, body: req.body }, "Upload request received");
    if (!req.file) {
      return res.status(400).json({ error: "Missing file" });
    }

    const record = await service.recordUpload(req.file, req.body.description);
    return sendSuccess(res, record, 201);
  },
  rename: async (req: Request, res: Response) => {
    const { oldPath, newName } = req.body;
    await service.renameMedia(oldPath, newName);
    return sendSuccess(res, { message: "File renamed successfully" });
  },

  changePath: async (req: Request, res: Response) => {
    const { oldPath, newPath } = req.body;
    await service.changeMediaPath(oldPath, newPath);
    return sendSuccess(res, { message: "File path changed successfully" });
  },

  delete: async (req: Request, res: Response) => {
    const { path } = req.body;
    await service.deleteMedia(path);
    return sendSuccess(res, { message: "File deleted successfully" });
  },
};
