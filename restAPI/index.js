const port = 3999;
const app = require("./app");

app.listen(port, ()=>{
    console.log(`port is ${port}`);
});