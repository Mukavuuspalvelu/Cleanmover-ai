const express = require("express");
const router = express.Router();

router.post("/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "❌ Viesti puuttuu." });
  }

  const reply = `✅ Vastaanotettu: "${message}"`;
  res.json({ reply });
});

module.exports = router;















