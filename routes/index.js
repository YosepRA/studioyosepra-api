'use strict';

const express = require('express');

const controllers = require('../controllers');

const router = express.Router();

/* ========== Routes ========== */

router.post('/mail', controllers.sendMail);

module.exports = router;
