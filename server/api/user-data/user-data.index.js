let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let Create = require('./user-data.controller');

router.use(bodyParser.urlencoded({extended: true}));

router.post('/create', Create);

module.exports = router;
