import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import router from './src/routes/chat.route.js';
dotenv.config();    

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());


app.use("/", router)

app.get('/', (req, res) => {
  res.send('Hello from the Authh service!');
}); 

app.listen(port, () => {
  console.log(`Authh service is running on port ${port}`);
  connectDB();
});