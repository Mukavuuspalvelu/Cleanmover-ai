
const express = require("express");
const path = require("path");
const webhookRoutes = require("./routes/webhook");

const app = express();
const port = process.env.PORT || 3000;

// Поддержка JSON-запросов (нужно для Tilda и других систем)
app.use(express.json());

// Статические файлы (например, index.html из /public)
app.use(express.static(path.join(__dirname, "public")));

// Подключаем маршруты для /webhook
app.use("/", webhookRoutes);

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




