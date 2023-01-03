const express = require("express");
const cors = require("cors");
const cookies = require("cookie-parser");
const port = 8000;
const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cookies());
// app.use("./server/uploads", express.static("middleware")); // tells server where to search images from

require("./config/mongoose.config");
require("./routes/user.routes")(app);
require('./routes/frontEnd.routes')(app);

const server = app.listen(port, () => console.log("listining on port", port));

const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
  console.log(`User Connected: ${socket.id}`);

socket.on("join_room", (data) => {
  socket.join(data)
  console.log(`User with ID: ${socket.id} joined room: ${data}`)
})

socket.on("send_message", data => {
  socket.to(data.room).emit("receive_message", data)
  console.log(data)
})

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id)
  });
});












require('./routes/user.routes')(app);

