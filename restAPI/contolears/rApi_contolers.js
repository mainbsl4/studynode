const { v4: uuidv4 } = require('uuid');
let data = require("../modals/rApi_modals")


//get
const getrapi = (req, res) => {
    res.status(200).json({ data })
};


//create {post}
const createrapi = (req, res) => {
    const callFormat = req.body;
    const newdata = {
        id: uuidv4(),
        email: callFormat.email,
        password: callFormat.password,
        x: {
            xx: callFormat.xx,
        }
    }
    data.push(newdata);
    res.status(200).json({
        success: true,
        messege: "success",
        data,
    })
}

// update {put} 
const updaterapi = (req, res) => {
    const rootid = req.params.id;
    const { email, password } = req.body;
    data.filter((data) => data.id === rootid).map((data) => {
        data.email = email;
        data.password = password;
    });


    res.status(200).json(data)
}


// delete {delete} 
const deleterapi = (req, res) => {
    const rootid = req.params.id;
    let datafilter = data.filter((data) => data.id !== rootid);
    data = datafilter
    res.status(200).json({ data });
}




module.exports = {
    getrapi,
    createrapi,
    updaterapi,
    deleterapi,
}