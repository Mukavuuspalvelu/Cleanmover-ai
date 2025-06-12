const express = require("express");
const router = express.Router();
const { sendWhatsAppMessage } = require("../services/whatsapp");

// Обработка POST-запросов от Tilda или других источников
router.post("/webhook", (req, res) => {
  const { name, phone, message } = req.body;

  console.log("📩 Получены данные от формы:", { name, phone, message });

  const text = `📝 Uusi tilaus:\n👤 Nimi: ${name}\n📞 Puhelin: ${phone}\n💬 Viesti: ${message}`;

  // Отправка WhatsApp-сообщения
  sendWhatsAppMessage(process.env.MY_PHONE_NUMBER, text);

  res.sendStatus(200);
});


