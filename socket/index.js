const { Server } = require("socket.io");

const io = new Server(8900, {
  cors: {
    origin: "http://localhost:5173", // No trailing slash
    methods: ["GET", "POST"], // Add methods if needed
  }
});

io.on("connection", (socket) => {
  console.log("a user connected");

  // Emit a welcome message when a user connects
  socket.emit("welcome", "Hello, this is the socket server!");
});

console.log("Socket.IO server running at http://localhost:8900");
