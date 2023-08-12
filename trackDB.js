require("dotenv").config();
const connectDB = require("./db/conn.js");
const Tracking = require("./models/track.js");


const myjson = require("./track.json");

const start = async () =>{
    try{
        await connectDB();
        // await Tracking.deleteMany();
        await Tracking.create(myjson);
        console.log("created");
    }catch(err){
        console.log(err);
    }
}

start();

//to store json file data to database run command
//node trackDB.js