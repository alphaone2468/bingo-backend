const wordDetails = require("../models/words_model");
const router=require("express").Router();

router.get("/",async (req,res)=>{
    console.log("Calling /words");

    
    const data = await wordDetails.find();
    console.log(data);
})

module.exports=router;