import type { Request, Response } from "express";
import { AdminService } from "./admin.service.js";
import { sendSuccess } from "../../utils/http.js";

let service: AdminService;

export const initAdminController = () => {
  service = new AdminService();
};

export const AdminController = {
  login: async (req: Request, res: Response) => {
    const result = await service.login(req.body.email, req.body.password);
    if (!result) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    return sendSuccess(res, result);
  },
  seed: async (_req: Request, res: Response) => {
    const user = await service.ensureSeedUser();
    return sendSuccess(res, user);
  },
};
