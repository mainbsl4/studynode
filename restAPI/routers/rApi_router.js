const express = require('express');
const rApiRouter = express.Router();
const rApiData = require("../modals/rApi_modals");
const { getrapi, createrapi } = require('../contolears/rApi_contolers');


rApiRouter.get('/rapi', getrapi);
rApiRouter.post("/rapi", createrapi);




module.exports = rApiRouter;