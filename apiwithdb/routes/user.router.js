const express = require('express');
const { getUser, createUser } = require('../contolers/user.contolers');

const userRouter = express.Router();


userRouter.get('/user', getUser);
userRouter.post('/user', createUser);

module.exports = userRouter;