require("dotenv").config();
const port = process.env.PORT || 3002;
const app = require("./app");

app.listen(port, () => {
    console.log(`port is ${port}`);
});