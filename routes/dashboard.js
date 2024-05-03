const express = require('express');
const dashboardRoute =  express.Router();

const {addIncomeAndExpense, getIncomeAndExpenses} = require('../controllers/dashboard');


dashboardRoute.get('/', getIncomeAndExpenses).post('/', addIncomeAndExpense);



module.exports = dashboardRoute;