const express = require('express');
const confirmRouter = express.Router();
const confirmCtrl = require('../controllers/confirm');


confirmRouter.post('/', confirmCtrl);



module.exports = confirmRouter;