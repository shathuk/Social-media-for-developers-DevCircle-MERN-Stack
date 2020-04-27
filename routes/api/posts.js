const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('user posts route');
});
module.exports = router;
