import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer sk-ТВОЙ_КЛЮЧ_ТУТ"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Ei vastausta saatu.";
    res.json({ reply });
  } catch (error) {
    console.error("Virhe:", error);
    res.status(500).json({ reply: "Palvelinvirhe." });
  }
});

app.get("/", (req, res) => {
  res.send("Mukavuuspalvelu Chat-palvelin on päällä.");
});

app.listen(port, () => {
  console.log(Server is running on port ${port});
});
