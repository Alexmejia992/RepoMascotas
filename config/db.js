const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        
    });
    console.log('Mongo conected')
}

module.exports = connectDB;