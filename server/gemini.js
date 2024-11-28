import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateFinancialAdvice(prompt) {
  try {
    // Use the Gemini API to generate a response
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(`You are a financial advisor. Provide specific financial advice based on the following prompt: ${prompt}`);
    const response = result.response;
    const text = response.text();

    return { message: text };
  } catch (error) {
    console.error("Error in generating financial advice:", error);
    throw new Error("Failed to generate response");
  }
}
