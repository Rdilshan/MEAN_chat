const { Socket } = require("socket.io");

const io = require("socket.io")(8900,{
    cors:{
        origin :"http://localhost:5173/"
    }
});

io.on("connection",(Socket)=>{
    console.log("a user connected")
})