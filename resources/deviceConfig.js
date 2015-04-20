var deviceInfo = {"device": {
    "id": 67676,
    "name": "walking_dead",
    "classification": "Videogame",
    "url": "localhost:3000",
    "functions": [{
        "name": "move",
        "url": "localhost:3000/action/move",
        "available": true,
        "parameters": [
            {
                "name": "direction",
                "type": "integer",
                "required": true,
                "constraints": [
                    {
                        "type": "NotNull",
                        "message": "move direction may not be null"
                    }
                ]
            }
        ]
    }]
}};

module.exports = deviceInfo;