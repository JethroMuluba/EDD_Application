const express = require('express');
const dashboardRoute =  express.Router();

const {addIncoling} = require('../controllers/dashboard');


dashboardRoute.post('/', addIncoling);



module.exports = dashboardRoute;