const crypto = require('crypto');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');



exports.register = async (req,res, next) =>{
    const {username, email, phone, password } = req.body;

    try {
        const user = await User.create({
            username, 
            email, 
            phone,
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
        // console.log(user.password)

    } catch (error) {
        res.status(500).json({ succes:false, error: error.message})
        
    }
}

exports.forgotpassword = async (req,res, next) =>{
    const { email } = req.body;

    try {
        const user = await User.findOne({ email});

        if(!user) {
            return next(new ErrorResponse("Email no registrado", 404))
        }

        const resetToken = user.getResetPasswordToken()

        await user.save();

        const resetUrl = `https://localhost:3000/resetPassword/${resetToken}`

        const message = `
            <h1>Has requerido un cambio de contraseña</h1>
            <p>Va a este link para reestablecer tu contraseña</p>
            <ahhref=${resetUrl} clicktracking=off>${resetUrl}</a>
        `

        try {
            await sendEmail({ 
              to: user.email, 
              subject: "Password reset required", 
              text: message
            });
            res.status(200).json({success: true, data: "Email Sent"});
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire= undefined;

            await user.save();

            return next(new ErrorResponse("Email no registrado", 500))
        }
    } catch (error) {
        next(error);
    }
}

exports.resetPassword = async (req,res, next) =>{
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

    try {
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }
        })

        if(!user) {
            return next(new ErrorResponse("Token invalido", 400));
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined,
        user.resetPassworExpire = undefined;

        await user.save();

        res.status(201).json({success: true, data: "Password reset success"})
    } catch (error) {
        next(error)
    }
}

// const sendToken = (user, statusCode, res) => {
//     const token = user.getSignedToken()
//     res.status(statusCode).json({success: true, token})
// }
const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ sucess: true, token });
};