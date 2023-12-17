const express = require('express');
const { getUser, createUser, updateUser, deleteUser } = require('../contolers/user.contolers');

const userRouter = express.Router();


userRouter.get('/user', getUser);
userRouter.post('/user', createUser);
userRouter.put('/user/:id', updateUser);
userRouter.delete('/user/:id', deleteUser);

module.exports = userRouter;