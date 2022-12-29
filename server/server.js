const express = require('express');
const cors = require ('cors')
const cookies = require ('cookie-parser')
const app = express();

require('./config/mongoose.config');
app.use(cors({
    credentials: true, origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(cookies());
app.use(express.urlencoded({extended: true}));

const port = 8000;
const db_name = "frontEnd"
require('./routes/frontEnd.routes')(app);

app.listen(
    port,
    ()=> console.log(`Listening on port : ${port}`));