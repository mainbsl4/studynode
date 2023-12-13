const path = require('path');
const users = require("../modals/user_modals");

const getUser = (req, res) => {
  res.sendfile(path.join(__dirname + '/../views/index.html'));
};

const postUser = (req, res) => {
  const callFormat = req.body;
  // const name = callFormat.name;
  // const age = Number(callFormat.age);
  const user = {
    name: callFormat.name,
    age: Number(callFormat.age),
  };
  users.push(user);
  res.status(201).json({
    success: true,
    users,
  });
  console.log(req.path);
};

module.exports = {
  getUser,
  postUser,
};