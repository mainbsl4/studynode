const express = require("express");
const user_router = express.Router();
const middleware = require("../middleware/fileOne");

// user_router.use(middleware);

user_router.get('/rigister', (req, res)=>{
  res.status(200).json({
    statusCode: 200,
    massege:"reg massege",
  });
  // res.append("id", "120000")
  res.end();
});


user_router.get('/login',middleware, (req, res)=>{
  // res.send("login");
  // res.cookie("name", "main");
  // res.cookie("age", "18");
  res.clearCookie("name");
  // res.clearCookie("age");
  res.end();
});


user_router.get('/logout', (req, res)=>{
  // res.send("logout");
  res.cookie("hi", "bye");
// res.clearCookie("hi");
  res.redirect("/api/user/rigister")
  res.end();
});


// make bodyparser with json
user_router.post("/bp", (req, res)=>{
  const name = req.body.name;
  const age = req.body.age;
  res.send(name+ (age+1));
});



// http request with route
user_router.get("/xid/:id/xage/:age([0-9]+)", (req, res)=>{
  const pam = req.params;
  const id = pam.id;
  const age = pam.age;
  res.send(`id ${id} age ${age}`);
});

module.exports = user_router;