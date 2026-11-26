import Conversation from "../models/conversation.model.js";
import Message from "../models/msg.model.js";

export const createConversation = async (req, res) => {
     try {
          const userId = req.headers["x-user-id"];
          console.log("userID",userId);
          const conversation = await Conversation.create({
               userId: userId,
          });

          return res.status(201).json({ message: "Conversation created successfully", conversation });

     } catch (error) {
          console.error("Error creating conversation:", error);
          res.status(500).json({ message: "Error creating conversation" });
     }
}

export const getCreateConversations = async (req, res) => {
     try {
          const userId = req.headers["x-user-id"];
          console.log("userID",userId);
          const conversation = new Conversation.find({
               userId: userId,
          }).sort({ URLPattern: -1 });

          return res.status(201).json({ message: "Conversation GET successfully", getCreateConversations: conversation });

     } catch (error) {
          console.error("Error creating conversation:", error);
          res.status(500).json({ message: "Error creating conversation" });
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
            return res.status(201).json({ message: "Message saved successfully", message });
     } catch (error) {
          console.error("Error saving message:", error);
          res.status(500).json({ message: "Error saving message" });
     }
}   

