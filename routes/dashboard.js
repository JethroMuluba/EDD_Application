const express = require('express');
const dashboardRoute =  express.Router();

const {addIncomeAndExpense} = require('../controllers/dashboard');


dashboardRoute.post('/', addIncomeAndExpense);



module.exports = dashboardRoute;