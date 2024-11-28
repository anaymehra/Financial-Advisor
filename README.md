# Financial Advisor Chatbot

## Overview

The Financial Advisor Chatbot is a web application that provides users with AI-powered financial advice. It utilizes the Gemini API to generate responses based on user queries about financial matters. This project combines a React frontend with a Node.js backend to create an interactive and user-friendly experience.

## Features

- AI-powered financial advice generation using the Gemini API
- User-friendly interface for submitting financial questions
- Real-time response display with formatted Markdown content
- Responsive design for various screen sizes
- Option to contact a human advisor for further assistance

## Tech Stack

- Frontend: React.js
- Backend: Node.js with Express
- AI Model: Google's Gemini API
- Styling: Custom CSS
- Markdown Rendering: react-markdown

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (v6 or later)

You will also need a Gemini API key from Google. You can obtain this by signing up for the Gemini API at [Google AI Studio](https://makersuite.google.com/app/apikey).

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/financial-advisor-chatbot.git
   cd financial-advisor-chatbot
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd /client
   npm install
   cd ../server
   npm install
   ```
3. Create a `.env` file in the root directory and add your Gemini API key:
  ```bash
  GEMINI_API_KEY=your_gemini_api_key_here
  ```
4. Start the backend server:
  ```bash
  npm start
  ```
5. In a new terminal, start the React frontend:
  ```bash
  cd client
  npm start
  ```
The application should now be running on `http://localhost:3000`.

##Project Structure
```bash
financial-advisor-chatbot/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── FinancialAdvisor.jsx
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── server.js
├── package.json
└── README.md
```
##How It Works

1. The user enters a financial question in the input field on the frontend.
2. The question is sent to the backend server.
3. The server uses the Gemini API to generate a response based on the user's query.
4. The AI-generated advice is sent back to the frontend and displayed to the user.
5. The response is rendered as formatted Markdown for better readability.
