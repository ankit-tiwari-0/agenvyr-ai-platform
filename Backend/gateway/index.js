import express from 'express';
import dotenv from 'dotenv';
import proxy from 'express-http-proxy';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import protectedRoutes from './middleware/auth.middleware.js';
import { getcurrentUser } from './controller/user.controller.js';
import { proxyWithHeader } from './utils/proxyWithheader.js';

dotenv.config();


const app = express();
const port = process.env.PORT || 8000 ;

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(cookieParser());
app.use("/auth",proxy(process.env.AUTH_SERVICE_URL));
app.use("/chat",protectedRoutes, proxyWithHeader(process.env.CHAT_SERVICE_URL));
app.get("/me",protectedRoutes, getcurrentUser);

app.get('/', (req, res) => {
  res.send('Hello from the gateway!');
});

app.listen(port, () => {
  console.log(`Gateway is running on port ${port}`);
});
