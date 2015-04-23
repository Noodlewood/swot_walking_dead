var tokens = require('./tokens.js');

var registerInfo = {
    "device": {
        "name": "The Walking Dead",
        "description": "Move the mindless Zombie around! It´s fun!",
        "profileimage": "http://localhost:3000/downloads/prototype_profile.jpg",
        "api": {
            "url": "http://localhost:3000"
        }
    }};

// add tokens to register info
registerInfo.device['tokens'] = tokens.tokens;

module.exports = registerInfo;