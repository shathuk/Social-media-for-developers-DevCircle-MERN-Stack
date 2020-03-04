const express = require('express');
const router = express.Router();
const { getRoute } = require('../controllers/auth');

router.route('/').get(getRoute);

module.exports = router;
