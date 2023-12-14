const express = require('express');
const rApiRouter = express.Router();
// const rApiData = require("../modals/rApi_modals");
const { getrapi, createrapi, updaterapi, deleterapi } = require('../contolears/rApi_contolers');


rApiRouter.get('/rapi', getrapi);
rApiRouter.post("/rapi", createrapi);
rApiRouter.put("/rapi/:id", updaterapi);
rApiRouter.delete("/rapi/:id", deleterapi);




module.exports = rApiRouter;