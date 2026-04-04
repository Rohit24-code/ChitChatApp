import { Router } from "express";
import { protectRoute } from "../middleware/auth";

const router = Router();

router.get("/chat:chatId", protectRoute, getMessages);

export default router;
