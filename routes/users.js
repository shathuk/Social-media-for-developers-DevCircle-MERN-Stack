const express = require('express');
const router = express.Router();
const { getRoute } = require('../controllers/users');

router.route('/').get(getRoute);

module.exports = router;
