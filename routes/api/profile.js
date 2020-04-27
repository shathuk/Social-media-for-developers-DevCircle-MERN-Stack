const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('user profile route');
});
module.exports = router;
