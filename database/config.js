const mongoose = require('mongoose');

const dbConnection = async (db) => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        });

        console.log("db online");
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    dbConnection
}