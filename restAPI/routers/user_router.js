const express = require('express');
const { getUser, postUser } = require('../contolears/user_contolers');
const userRouter = express.Router();

userRouter.get('/user', getUser);

userRouter.post('/user', postUser);

module.exports = userRouter;