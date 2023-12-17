const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/user.router');

app.use(cors());

// Database
require("./config/db");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/api", userRouter);


app.get("/", (req, res)=>{
    res.send("wellcome to main route");
});


module.exports = app;