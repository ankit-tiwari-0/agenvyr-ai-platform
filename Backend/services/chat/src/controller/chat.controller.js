import Conversation from "../models/conversation.model.js";
import Message from "../models/msg.model.js";

export const createConversation = async (req, res) => {
    try {
        const userId = req.headers["x-user-id"];
        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }
        console.log("userID", userId);
        const conversation = await Conversation.create({
            userId: userId,
        });

        return res.status(201).json({ message: "Conversation created successfully", conversation });

    } catch (error) {
        console.error("Error creating conversation:", error);
        res.status(500).json({ message: "Error creating conversation" });
    }
}

export const getConversations = async (req, res) => {
    try {
        const userId = req.headers["x-user-id"];
        console.log("userID", userId);
        const conversation = await Conversation.find({
            userId: userId,
        }).sort({ updatedAt: -1 });

        return res.status(200).json({ message: "Conversation GET successfully", getCreateConversations: conversation });

    } catch (error) {
        console.error("Error fetching conversation:", error);
        res.status(500).json({ message: "Error fetching conversation" });
    }
}

export const updateCreateConversations = async (req, res) => {
    try {
        const {id,title} = req.body;
        const conversation = await Conversation.findByIdAndUpdate(
            id,
            { title }
        );

        return res.status(200).json({ message: "Conversation GET successfully", updateConversations: conversation });

    } catch (error) {
        console.error("Error fetching conversation:", error);
        res.status(500).json({ message: "Error fetching conversation" });
    }
}

export const saveMessage = async (req, res) => {
    try {
        const { conversationId, role, content } = req.body;
        const message = await Message.create({
            conversationId,
            role,
            content,
        });
        return res.status(201).json({ message: "Message saved successfully", save: message });
    } catch (error) {
        console.error("Error saving message:", error);
        res.status(500).json({ message: "Error saving message" });
    }
}

export const getMessage = async (req, res) => {
    try {
       const { conversationId } = req.params;
        const message = await Message.find({
            conversationId
        }).sort({ createdAt: 1 });
        return res.status(200).json({ message: "Message fetched successfully", getmsg: message });
    } catch (error) {
        console.error("Error fetching message:", error);
        res.status(500).json({ message: "Error fetching message" });
    }
}

