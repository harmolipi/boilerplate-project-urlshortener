const express = require('express');
const router = express.Router();

const api_controller = require('../controllers/apiController');

router.get('/shorturl/:url', api_controller.get_shorturl);
router.post('/shorturl', api_controller.post_shorturl);

module.exports = router;
