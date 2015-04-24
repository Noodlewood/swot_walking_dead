var tokens = require('./tokens.js');

var registerInfo = {
    "device": {
        "name": "The Walking Dead",
        "description": "Move the mindless Zombie around! It´s fun!",
        "profileimage": baseUrl + "/downloads/prototype_profile.jpg",
        "api": {
            "url": baseUrl
        }
    }};

// add tokens to register info
registerInfo.device['tokens'] = tokens.tokens;

module.exports = registerInfo;