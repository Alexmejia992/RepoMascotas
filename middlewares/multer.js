// const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');

// const storage = new GridFsStorage({
//     url: process.env.MONGO_URI,
//     options: { useNewUrlParser: true, useUnifiedTopology: true },
//     file: (req,file) => {
//         const match = ["image/png", "image/jpeg"];
        
//         if(match.indexOf(file.mimetype) === -1) {
//             const filename = `${Date.now()}-any-name-${file.originalname}`;
//             return filename;
//         }
//         return {
//             bucketName: "petPhotos", 
//             filename: `${Date.now()}-any-name-${file.originalname}`,
//         }
//     }
// });


// module.exports = multer({ storage });

  
const multer = require('multer');

// set storage
var storage = multer.diskStorage({
    destination : function ( req , file , cb ){
        cb(null, 'uploads')
    },
    filename : function (req, file , cb){
        // image.jpg
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.'));

        cb(null, file.fieldname + '-' + Date.now() + ext)
    }
})

module.exports = store = multer({ storage : storage })