const http = require("http");
const { Server } = require("socket.io");
const colors = require("colors");
const connectDB = require("./config/db");
const app = require("./app");

require("dotenv").config();

connectDB();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user disconnected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`.blue.bold);
});
