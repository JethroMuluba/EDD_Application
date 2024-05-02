const express = require( 'express' );
const userRegister = express.Router();


const registerCtr = require('../controllers/register');

userRegister.post('/', registerCtr);


module.exports = userRegister;