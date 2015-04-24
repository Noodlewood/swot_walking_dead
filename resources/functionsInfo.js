var functionsInfo = {
    "functions": [{
        "name": "Move",
        "url": baseUrl + "/action/move",
        "available": true,
        "parameters": [
            {
                "name": "direction",
                "type": "Choice",
                "choices": [
                    "up", "down", "left", "right"
                ],
                "required": true,
                "constraints": [
                    {
                        "type": "NotBlank",
                        "message": "Move may not be blank"
                    }
                ]
            }
        ]
}]};

module.exports = functionsInfo;