import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import PieData from './model/PieData.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Mongoose Connected'))
  .catch((err) => console.log(err));

app.get('/', async (req, res) => {
  const data = await PieData.find(); 
  res.json(data);
  console.log("HIii");
});


app.listen(process.env.PORT, () => {
  console.log(`Server Running on ${process.env.PORT}`);
});

