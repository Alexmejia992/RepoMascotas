// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const ErrorResponse = require('../utils/errorResponse');

// exports.protect = async (req, res, next) => {
//     let token;

//     if(req.headers.authorization && 
//         req.headers.authorization.startsWith("Bearer")) {
//         token = req.headers.authorization.split(" ")[1];
//     }
//     if(!token) {
//         // return next(new ErrorResponse('No estás autorizado para acceder a esta ruta', 401))
//         return res.status(401).json('El error está en esta linea')
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await User.findById(decoded.id)

//         if(!user) {
//             return next(new ErrorResponse('Usuario no encontrado', 404))
//         }

//         req.user = user;

//         next();
//     } catch (error) {
//         return next(new ErrorResponse('No autorizado para acceder a esta rutaa', 401));
//     }
// }
const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
    // return res.status(401).json('El error está en esta linea')
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("No user found with this id", 404));
    }

    req.user = user;

    next();
  } catch (err) {
    return next(new ErrorResponse("Not authorized to access this router", 401));
  }
};