const express = require("express");
const router = express.Router();

// Обработка POST-запросов от Tilda и чата
router.post("/webhook", (req, res) => {
  console.log("📩 Получены данные от Tilda:", req.body);
  res.sendStatus(200);
});

router.post("/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "⛔ Viesti puuttuu." });
  }

  const reply = `✅ Vastaanotettu: "${message}"`;
  res.json({ reply });
});

module.exports = router;





