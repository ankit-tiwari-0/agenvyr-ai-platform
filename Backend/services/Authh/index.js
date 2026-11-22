import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';

dotenv.config();    

const app = express();
const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Hello from the Authh service!');
}); 

app.listen(port, () => {
  console.log(`Authh service is running on port ${port}`);
  connectDB();
});