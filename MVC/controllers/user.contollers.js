const path = require("path");
const users = require("../models/user.model");
exports.getUsers = (req, res)=>{
    res.sendfile(path.join(__dirname+ "/../views/index.html"));
};

exports.postUsers =  (req, res)=>{
    const callFormat = req.body;
    const name = callFormat.name;
    const age = Number(callFormat.age);
    const user = {
        name,
        age,
    };
    users.push(user);
    res.status(201).json({
        success:true,
        users,
    });

    console.log(req.path);
};