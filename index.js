const express = require("express");
const cors=require("cors");
const app=express();
const http=require("http");
const {Server}=require("socket.io");
const server=http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:"https://bingo-game101.netlify.app/",
    }

});

const arr=[];

io.on("connection",(socket)=>{
    // console.log(socket.id);

    socket.on("send",(ele)=>{
        // console.log(ele);
        arr.push(ele);

        if(arr.length>=2){
            // console.log("start game bro");
            // console.log(arr);
            io.emit("start",arr[arr.length-1]);
        }
    })
})



// require("./db/Conn");
const {addRoom, AddAPerson, getRoom, deleteRoom, generateRoomId, addNumber}=require("./api/room");

app.use(express.json());
app.use(cors());


app.get("/check",(req,res)=>{
    res.send("Hello world");
})


app.post("/add-room",addRoom);
app.post("/add-person",AddAPerson);
app.get("/get-room",getRoom);
app.delete("/delete-room",deleteRoom);
app.get("/gen-rid",generateRoomId);
app.post("/add-num",addNumber);

server.listen(5000);