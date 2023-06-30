const mongoose = require("mongoose");
const url = process.env.DATABASE_URL

mongoose.connect("mongodb+srv://yewaxy:HMFSdJ0Bvwh2TXqf@cluster0.xs56uw1.mongodb.net/?retryWrites=true&w=majority")
//takes a promise called .then and .catch
.then(()=>{
    console.log("connection to the database is successful")
}).catch((error)=>{
        console.log(error.message)
    })