const axios = require("axios");

const sendWhatsAppMessage = async (to, message) => {
  try {
    const response = await axios.post(
      "https://api.twilio.com/2010-04-01/Accounts/" + process.env.TWILIO_ACCOUNT_SID + "/Messages.json",
      new URLSearchParams({
        To: `whatsapp:${to}`,
        From: `whatsapp:+14155238886`,
        Body: message,
      }),
      {
        auth: {
          username: process.env.TWILIO_ACCOUNT_SID,
          password: process.env.TWILIO_AUTH_TOKEN,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log("✅ Отправлено:", response.data.sid);
  } catch (error) {
    console.error("❌ Ошибка отправки:", error.message);
  }
};

module.exports = { sendWhatsAppMessage };
