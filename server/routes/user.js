'use strict';

const UserHandler = require('../handlers/user.handler.js');
const router = require('express').Router();

router.post('/update', UserHandler.updateProfile);

module.exports = router;
