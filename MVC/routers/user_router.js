const express = require("express");
const {getUsers, postUsers} = require("../controllers/user.contollers");
const router = express.Router();
// router.get("/about", (req, res)=>{
//     res.send("about");
// });
//
// router.get("/home", (req, res)=>{
//     res.send("Home");
// });
// router.get("/contact", (req, res)=>{
//     res.send("Contact");
// });
// router.get("/others", (req, res)=>{
//     res.send("Others");
// });

router.get("/user", getUsers);

router.post("/user", postUsers);

module.exports = router;