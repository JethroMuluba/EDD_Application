const express = require('express');
const dashboardRoute =  express.Router();

const {addIncoling, addExpenses} = require('../controllers/dashboard');


dashboardRoute.post('/', addIncoling, addExpenses);



module.exports = dashboardRoute;