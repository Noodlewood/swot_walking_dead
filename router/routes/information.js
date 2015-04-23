var express = require('express');
var router = express.Router();

var db = require('../../resources/db.js');
var tokens = require('../../resources/tokens.js');
/**
 * Returns the device config as json object
 */
router.get('/', function(req, res) {
    res.json();
});

module.exports = router;
