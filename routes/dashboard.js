const express = require('express');
const dashboardRoute =  express.Router();

const dashboardCtr = require('../controllers/dashboard');


dashboardRoute.post('/', dashboardCtr);



module.exports = dashboardRoute;