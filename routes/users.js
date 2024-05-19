const express = require('express');
const { getUsers, deleteUser } = require('../controllers/users');
const usersRouter = express.Router();


usersRouter.get('/users', getUsers).delete('/users/:id', deleteUser);

module.exports = usersRouter;