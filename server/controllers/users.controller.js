const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const { User } = require("../models/user");

module.exports.signup = async (req, res) => {

    try {
        
        const { email, password, confirmPassword, firstName,lastName } = req.body;

        // find an existing user using their email
        const existingUser = await User.findOne({ email })
        
        // if user already exit 
        if (existingUser) {
            
            res.status(400).json({ message: "User already exit." })
            
        } else {

            if (password !== confirmPassword) {
                
                res.status(400).json({ message: "password don't match" })
                
            } else {

                // hashing of password 
                const hashPassword = await bcrypt.hash(password, 12)
                
                // creation of user 
                const userIsCreated = await User.create({ email, password: hashPassword, name: `${firstName} ${lastName}` })
                
                console.log(userIsCreated,'userIsCreated')

                if (userIsCreated) {
                    
                    const generateToken = jwt.sign({id: userIsCreated.id }, process.env.secretKey, { expiresIn: "1h" })

                    console.log(generateToken, 'getToken')
                    
                    res.status(201).json(userIsCreated)
                    
                }
                
            }
        }

    } catch (error) {
        
        console.log(error.message)

        res.status(500).json({message:error})

    }
};

// singin
module.exports.signin = async (req, res) => {

    try {
        
        const { email, password } = req.body;
        
        const existingUser = await User.findOne({email})

        console.log(existingUser);

        if (!existingUser) {
            
            res.status(404).json({ message: "User doesn't exit." })
            
        } else {
            
            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

            if(!isPasswordCorrect){

                res.status(400).json({ message: "Invalid credentials" })
                
            } else {

                const getToken = jwt.sign({ id: existingUser.id }, process.env.secretKey, { expiresIn: "1h" })
                
                res.status(200).json({result:existingUser, getToken})
                
            }
        }

    } catch (error) {
        
        console.log(error)

        res.status(500).json(error)
        
    }
};
