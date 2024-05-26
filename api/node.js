const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(express.json());
app.use(cors());

// Initialize the OpenAI API with your API key
const openai = new OpenAI({
  apiKey: "your-openai-api-key",
});

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
      max_tokens: 150,
      temperature: 0.7,
    });

    const botResponse = chatCompletion.choices[0].message.content;
    res.json({ response: botResponse });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;
