const express = require("express");
const userRouter = require("./routers/user_router");
const app = express();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());


app.use("/api", userRouter);

app.get("/", (req, res)=>{
    res.send("Error");
});

module.exports = app;