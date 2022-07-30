const jwt = require("jsonwebtoken");

module.exports.auth = async (request, respond, next) => {

    try {
        
        console.log(request.headers, 'tokenExit');
        const tokenExit = request.headers.authorization.split(" ")[1];
        
        
        const customToken = tokenExit.length < 500;

        let decodedData;

        if (tokenExit && customToken) {
            
            decodedData = jwt.verify(tokenExit, secretKey)

            request.userId = decodedData?.id

        } else {
            
            decodedData = jwt.decode(tokenExit)

            request.userId = decodedData?.sub;

        }

        next()

    } catch (error) {
        
        console.log(error)

    }
}