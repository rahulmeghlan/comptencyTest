let express = require('express');
let router = express.Router();
let userController = require('./user-data.controller');

router.post('/create', userController.Create);

module.exports = router;
