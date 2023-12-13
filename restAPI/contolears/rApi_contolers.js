const { v4: uuidv4 } = require('uuid');
const data = require("../modals/rApi_modals")

const getrapi = (req, res) => {
    res.status(200).json({ rApiData })
};


const createrapi = (req, res) => {

    const callFormat = req.body;
    const newrapi = {
        id: uuidv4(),
        email: callFormat.email,
        password: callFormat.password,
    }
    data.push(newrapi);
    res.status(200).json({
        success: true,
        messege: "success",
        data,
    })
}





module.exports = {
    getrapi,
    createrapi,
}