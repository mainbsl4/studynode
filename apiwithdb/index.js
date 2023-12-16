require('dotenv').config()
const Port = process.env.PORT || 3838;
const app = require("./app");

app.listen(Port, (req, res)=>{
    console.log(`server is running on port ${Port}`);
});

