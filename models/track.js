const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
    dsa:{
        type: String,
        required: [true, "name of datastructure is required"],
        // enum:{
        //     values: ["array", "string", "linked list", "tree", "binary search tree"],
        //     message: `{VALUE} is not supported`,
        // }
    },
    easy:{
        type: Number,
        default: 0,
        required: [true, "number of easy question you had done is required else type 0"],
    },
    medium:{
        type: Number,
        default: 0,
        required: [true, "number of medium question you had done is required else type 0"],
    },
    hard:{
        type: Number,
        default: 0,
        required: [true, "number of hard question you had done is required else type 0"],
    },
    date:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("mygrowthtracker", trackSchema );