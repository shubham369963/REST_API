const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const connectDB = () => {
    mongoose.connect( process.env.MONGODB_KEY || "mongodb://localhost:27017/mygrowthtrack" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then( () =>{
    console.log("connection successful");
}).catch( (err) =>{
    console.log(err);
});
}

module.exports = connectDB;