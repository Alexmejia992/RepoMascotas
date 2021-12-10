const fs = require('fs');

const saveImage = (files) =>{
    
    
        if(!files){
            const error = new Error('Please choose files');
            error.httpStatusCode = 400;
            return error
        }
    
        // convert images into base64 encoding
        let imgArray = files.map((file) => {
            let img = fs.readFileSync(file.path)
    
             return encode_image = img.toString('base64')
        })
    
        let result = imgArray.map((src, index) => {
    
            // create object to store data in the collection
            let finalImg = {
                filename : files[index].originalname,
                contentType : files[index].mimetype,
                imageBase64 : src
            }      
            return finalImg                
                    
        });
        return result;
}

module.exports = saveImage;