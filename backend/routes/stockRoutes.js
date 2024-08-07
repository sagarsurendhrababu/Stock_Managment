const express = require('express');
const {getStock,postStock} = require('../controllers/StockController')
const router = express.Router();

router.route('/').get(getStock).post(postStock)

module.exports = router;