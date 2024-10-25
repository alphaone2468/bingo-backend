const mongoose=require("mongoose")
const dbvalue="mongodb://127.0.0.1:27017/Whos-The-Spy";
mongoose.connect(dbvalue).then((msg)=>{
    console.log("connection sucessfull")
}).catch((error)=>{
    console.log("not connected")
})

