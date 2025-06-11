const express = require('express');
const router = express.Router();

// Обработка POST-запросов от Tilda (или другого источника)
router.post('/webhook', (req, res) => {
  console.log('Получены данные от Tilda:', req.body);
  res.sendStatus(200);
});

module.exports = router;
