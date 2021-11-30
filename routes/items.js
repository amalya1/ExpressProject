const express = require('express');
const manager = require('../managers/manager');

const router = express.Router();

router.post('/', manager.addItems);

router.get('/', manager.getItems);

module.exports = router;
