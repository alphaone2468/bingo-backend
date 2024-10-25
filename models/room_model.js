const mongoose = require("mongoose");

const RoomSch = mongoose.Schema({
    rid:String,
    people:[String],
    currentNumber:{
        type:Number,
        default:-1
    }
})

const model = mongoose.model("RoomDetails",RoomSch);

module.exports=model;