import{ getAuth } from "firebase-admin/auth";
import { App } from "../config/firebase.js";
import User from "../models/user.model.js";

export const login = async (req, res) => {
    try {
        const {token} = req.body;
       const decodedToken = await getAuth(App).verifyIdToken(token);
       let user=await User.findOne({firebaseId:decodedToken.uid});
       if(!user){
         user=await User.create({
            firebaseId:decodedToken.uid,
            name:decodedToken.name,
            email:decodedToken.email,
            avatar:decodedToken.picture
         });
       }

       const sessionId = crypto.randomUUID();

       res.cookie('session', sessionId, {
        httpOnly: true,
        secure: false, // Set to true in production
        sameSite: 'strict',
        maxAge: 7*24 * 60 * 60 * 1000 // 24 hours
       });

      return res.status(200).json({message:"User logged in successfully", user});
    } catch (error) {
        return res.status(500).json
        ({message:"Internal server error", 
            error: error.message});
    }

}