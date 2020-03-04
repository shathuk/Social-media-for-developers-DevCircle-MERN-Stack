const express = require('express');
const router = express.Router();
const { getRoute } = require('../controllers/posts');

router.route('/').get(getRoute);

module.exports = router;
