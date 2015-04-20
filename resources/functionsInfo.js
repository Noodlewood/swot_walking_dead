var functionsInfo = {
    "functions": [{
        "name": "The Walking Dead",
        "url": "http://localhost:3000/action/move",
        "available": true,
        "parameters": [
            {
                "name": "move",
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