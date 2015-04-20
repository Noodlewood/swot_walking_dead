var express = require('express');
var router = express.Router();

var server = require('http').Server(express);
var io = require('socket.io')(server);
server.listen(80);

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
            console.log(req.query)
            if (req.query.direction == "0" || req.query.direction == "1"
                || req.query.direction == "2" || req.query.direction == "3") {

                var functionMessage = "Zombie moved ";
                serverCom.sendMessageToServer(functionMessage);
                serverCom.sendInfoUpdateNotification();

                var actionResponse = {
                    "statusCode": 200,
                    "status": "success",
                    "request": {
                        "requestedUrl": "http://localhost:3000/action/move",
                        "functionName": "move",
                        "params": [
                            {
                                "name": "move",
                                "type": "Choice",
                                "choices": [
                                    "up", "down", "left", "right"
                                ],
                                "required": true
                            }]
                    }
                };
                actionResponse.message = functionMessage;

                res.json(actionResponse);

                io.emit('move', {direction: 0});
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