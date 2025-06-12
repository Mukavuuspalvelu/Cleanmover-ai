const express = require("express");
const path = require("path");

const webhookRoutes = require("./routes/webhook");
const chatRoute = require("./routes/chat"); // ← если файл chat.js лежит в src/routes

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", webhookRoutes);
app.use("/", chatRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





