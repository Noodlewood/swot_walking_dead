var express = require('express');
var router = express.Router();


var tokens = require('../../resources/tokens.js');
var serverCom = require('../../resources/serverCommunication');
var func = require('../../resources/functionsInfo.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('ACTION TIME');
});

router.get('/move', function(req, res) {
        if (req.headers['accesstoken'] != tokens.tokens.owner_token && req.headers['accesstoken'] != tokens.tokens.write_token) {
            var err = new Error();
            err.status = 403;
            err.message = 'You are not permitted to perform this.';
            res.status(403).json(err);
        }else{
            var choices = func.functions[0].parameters[0].choices;
            var paramName = func.functions[0].parameters[0].name;
            var paramNumber = parseInt(req.query[paramName]);
            var choice = choices[paramNumber];
            if (choice) {

                var functionMessage = "Zombie moved " + choice;
                serverCom.sendMessageToServer(functionMessage);
                serverCom.sendInfoUpdateNotification();

                var actionResponse = {
                    "statusCode": 200,
                    "status": "success"
                };
                actionResponse.message = functionMessage;

                res.json(actionResponse);

                io.emit('move', choice);
            } else {
                // a wrong parameter was sent
                var err = new Error();
                err.status = 406;
                err.message = 'Parameter for command is wrong';
                res.status(406).json(err);
            }
        }
});

module.exports = router;