const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');
const Controller2 = require('../controllers/controller2');
module.exports = router.get('/stored', Controller.getUsers);
module.exports = router.get('/api/register', Controller2.getInfo);