
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const webhookRoutes = require("./routes/webhook");
const chatRoutes = require("./routes/chat"); // 

app.use(bodyParser.json());

app.use("/", webhookRoutes);
app.use("/", chatRoutes); // 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});














