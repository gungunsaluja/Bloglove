const mongoose = require("mongoose");

// is line se congiguration h dotenv m vo load hojati h
require("dotenv").config();

const connectWithDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,

    })
    .then(()=>console.log("DB connected successfully"))
    .catch((error)=>{
        console.log("Db facing connection issues");
        console.log(error);
        process.exit(1);

    })
}
module.exports = connectWithDb;