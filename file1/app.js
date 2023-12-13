const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const user_router = require("./routers/user-router")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/user', user_router);

app.get('/', (req, res) => {
  res.send("hellohhh")
})
app.use((req, res) => {
  res.send("error")
})



module.exports= app;
