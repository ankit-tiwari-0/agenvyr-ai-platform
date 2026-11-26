import { Router } from "express";
import { createConversation, getConversations, getMessage, saveMessage, updateCreateConversations } from "../controller/chat.controller.js";

const router = Router();

router.get("/create-conversations", createConversation);
router.get("/get-conversations", getConversations);
router.post("/update-conversations", updateCreateConversations);
router.post("/save-message", saveMessage);
router.get("/get-message/:conversationId", getMessage);

export default router;