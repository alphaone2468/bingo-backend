const mongoose = require("mongoose");

const wordsSch=mongoose.Schema({
    wordVillager:String,
    wordSpy:String
})

const model = mongoose.model("wordDetails",wordsSch);

module.exports=model;