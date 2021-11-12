const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse')


exports.register = async (req,res, next) =>{
    const {username, email, password } = req.body;

    try {
        const user = await User.create({
            username, 
            email, 
            password
        });

        // res.status(201).json({
        //     success: true,
        //     token: '123asd'
        // });
        sendToken(user, 200, res)
    } catch (error) {
        // res.status(500).json({
        //     success: false,
        //     error: error.message,
        // });
        next(error);
    }
}

exports.login = async (req,res, next) =>{
    const { email, password } = req.body;

    if(!email || !password) {
        return next(new ErrorResponse("Es necesario un nombre de usuario y contraseña", 400));
    }

    try {
        const user = await User.findOne({ email }).select("+password");

        if(!user) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        const isMatch  = await user.matchPassword(password);

        if(!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        // res.status(200).json({
        //     success: true,
        //     token: "asdasd123123"
        // });
        sendToken(user, 200, res)

    } catch (error) {
        res.status(500).json({ succes:false, error: error.message})
        
    }
}

exports.forgotpassword = (req,res, next) =>{
    res.send('Forgot Password Router')
}

exports.resetPassword = (req,res, next) =>{
    res.send('Reset Password Router')
}

// const sendToken = (user, statusCode, res) => {
//     const token = user.getSignedToken()
//     res.status(statusCode).json({success: true, token})
// }
const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ sucess: true, token });
  };