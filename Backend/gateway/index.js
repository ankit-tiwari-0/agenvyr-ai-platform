import express from 'express';
import dotenv from 'dotenv';
import proxy from 'express-http-proxy';

dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

app.use("/auth",proxy(process.env.AUTH_SERVICE_URL));

app.get('/', (req, res) => {
  res.send('Hello from the gateway!');
});

app.listen(port, () => {
  console.log(`Gateway is running on port ${port}`);
});
