const  express = require("express");
const  app = express();
const userRouter = require("./routers/user_router");
const productRouter = require("./routers/product_router");
const bodyParser = require('body-parser');
const cors = require('cors')
const os = require("os")


app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.use("/api", userRouter);
app.use("/api", productRouter);
app.get("/", (req, res)=>{
    res.send("hi");
    console.log(os.cpus())
    console.log(os.freemem())
});
app.use((req, res)=>{
    res.send("error");
});

module.exports = app;