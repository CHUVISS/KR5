import { Router } from "express";
import { generateNickname, getHistory, clearHistory } from "../controllers/nicknamesController.js";

const router = Router();
router.get("/", generateNickname);
router.get("/history", getHistory);
router.delete("/history", clearHistory);
export default router;
