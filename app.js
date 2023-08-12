const express = require("express");
const app = express();
const connectDB = require("./db/conn.js");
const PORT = process.env.PORT || 8000;

const track_routes = require("./routes/mytrack");

require("dotenv").config();


app.get("/", (req,res) =>{
    res.send("hii i am live");
});

app.use("/api/mytrack",track_routes);

const start = async () =>{
    try{
        await connectDB();
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        });
    }catch(err){
        console.log(err);
    }
};

start();
