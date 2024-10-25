const Room = require("../models/room_model");


const getRoom = async (req, res) => {
    let data = await Room.find({});
    res.json(data);
}

const addRoom = async (req, res) => {
    let data = new Room(req.body);
    data = await data.save();
    console.log(data);

    res.json("data added");
}

const AddAPerson = async (req, res) => {
    //check there should not be more than 2 people
    let currentArray = await Room.findOne({ rid: req.body.rid }, { people: 1, _id: 0 });
    let peoplesArray = currentArray.people;
    console.log(peoplesArray);

    if (peoplesArray.length < 2) {
        //add people
        peoplesArray.push(req.body.newperson);
        let data = await Room.updateOne({ rid: req.body.rid }, { $set: { people: peoplesArray } });
        console.log(data);
    }
    else {
        //reject people
        console.log("cant add data", peoplesArray);
    }

    // let data = await Room.updateOne({ rid: req.body.rid }, { $set: { people: ["updated bro"] } });
    res.json(currentArray.people);
}

const deleteRoom = async (req, res) => {
    const data = await Room.deleteOne({ rid: req.body.rid });
    console.log(data);
}

const generateRoomId = async (req, res) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let roomId = "";
    for (var i = 0; i < 5; i++) {
        roomId = roomId + chars[Math.floor(Math.random() * 36)]
    }

    res.send(roomId);
}

const addNumber = async (req,res) =>{
    const data = await Room.updateOne({rid:req.body.id},{$set:{currentNumber:req.body.num}});

    res.send(data);
}

module.exports = { addRoom, AddAPerson, getRoom, deleteRoom, generateRoomId,addNumber };