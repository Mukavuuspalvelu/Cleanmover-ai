// Пример: обработка чата на сайте
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/chat', async (req, res) => {
  const { message } = req.body;

  const reply = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: "gpt-4o",
    messages: [
      { role: "system", content: "Olet asiakaspalvelija Mukavuuspalvelu Oy:stä." },
      { role: "user", content: message }
    ]
  }, {
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    }
  });

  res.json({ reply: reply.data.choices[0].message.content });
});

module.exports = router;
