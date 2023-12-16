const { v4: uuidv4 } = require('uuid');
const data = require("../modals/user.modals");

const getUser = (req, res) => {
    res.status(200).json({data});
};

const createUser = (req, res) => {
    
    const callFormat = req.body;
    
    const newData = {
        id: uuidv4(),
        name : callFormat.name,
        email : callFormat.email
    };

    data.push(newData);

    res.status(200).json({
        success: true,
        messege: "success",
        data
    });
};


// const updateUser = (req, res)=>{
//     const rootId = req.prams.id;

// }

module.exports = {
    getUser,
    createUser,
};