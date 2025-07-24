const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const openaiRes = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are Scoopy, a friendly ice cream chatbot for Velvet Cream Co. Help users with flavors, orders, offers, and store details"
          },
          { role: "user", content: userMessage }
        ],
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        }
      }
    );

    const reply = openaiRes.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ reply: "Oops! Something went wrong with Scoopy's brain 🧠🍦." });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
