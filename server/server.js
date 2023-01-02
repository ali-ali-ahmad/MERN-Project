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

app.listen(port, () => console.log("listining on port", port));












require('./routes/user.routes')(app);

