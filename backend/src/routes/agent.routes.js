import { Router } from "express";
import { analyzeFile, generate } from "../controllers/agent.controllers.js";
import { upload_file } from "../middleware/multer.middleware.js";
const agentRoutes = Router();

agentRoutes.post("/agent", generate);

agentRoutes.post("/analyze-file", upload_file.single("interview"), analyzeFile);

export default agentRoutes;
