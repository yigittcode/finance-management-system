import express from 'express';
import dotenv from 'dotenv';
import cors from './middlewares/CORS.js';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors);
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
