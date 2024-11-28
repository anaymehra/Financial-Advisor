import express from 'express';
import { generateFinancialAdvice } from './gemini.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    const advice = await generateFinancialAdvice(prompt);
    res.json(advice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));