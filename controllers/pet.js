const Pet = require('../models/Pet'); 
const sendEmail = require('../utils/sendEmail');
const sendImage = require('../utils/saveImage');
const fs = require('fs');



exports.petregister = async (req, res, next) => {
    const { petname, species, breed, color, gender, dateofbird} = req.body;
    const files = req.files

    
        try {
            const pet = await Pet.create({     
                petname,
                species,
                breed,
                color,
                gender,
                dateofbird
            });
            
            res.status(201).json({
                success: true,
                message:  pet.petname
            });
    
            const message = `
            <h1>Has registrado a tu mascota ${petname}</h1>
            <p>En el momento tu aplicación se encuentra en estado PENDIENTE</p>
            
            `
            if(res.statusCode === 201){
                try {
                    console.log('DONE')
                    // await sendEmail({
                    //     to: "alexmejia992@gmail.com",
                    //     subject: "pet registration",
                    //     text: message
                    // })
                } catch (error) {
                    next (error)
                }
            }
        } catch (error) {
            console.log('error 1')
            next(error)
        }
};


