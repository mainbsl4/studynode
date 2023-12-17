const { v4: uuidv4 } = require('uuid');
let data = require("../modals/user.modals");

const getUser = (req, res) => {
    res.status(200).json({ data });
};

const createUser = (req, res) => {

    const callFormat = req.body;

    const newData = {
        id: uuidv4(),
        name: callFormat.name,
        email: callFormat.email
    };

    data.push(newData);

    res.status(200).json({
        success: true,
        messege: "success",
        data
    });
};


//update data

const updateUser = (req, res) => {
    const rootId = req.params.id;

    const { name, email } = req.body;
    data.filter((data) => data.id === rootId).map((data) => {
        data.name = name;
        data.email = email;
    })
    res.status(200).json({
        success : true,
        messege : 'success',
        data
    })
}


//delete 

const deleteUser = (req, res)=>{
    const rootId = req.params.id;
    const deleteData = data.filter((data)=>data.id !== rootId);
    data = deleteData;
    res.status(200).json({
        success : true,
        messege : 'success',
        data
    });
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
};