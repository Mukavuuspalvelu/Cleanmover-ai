const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

// Парсинг JSON
app.use(bodyParser.json());

// POST-обработчик чата
router.post("/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "❌ Viesti puuttuu." });
  }

  const reply = `✅ Vastaanotettu: "${message}"`;
  res.json({ reply });
});

// Подключение маршрута
app.use("/", router);

// Старт сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
