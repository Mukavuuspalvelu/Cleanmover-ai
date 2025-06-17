const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const webhookRoutes = require("./routes/webhook");

app.use(cors());
app.use(bodyParser.json());
app.use("/webhook", webhookRoutes); // 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});









