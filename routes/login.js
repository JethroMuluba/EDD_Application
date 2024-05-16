const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginRouter = express.Router();
const prisma = require('../database/prima');
require('dotenv').config();


loginRouter.post('/', async (req, res, next) => {
    passport.authenticate('local', { session : false}, (err, user, info) => {
        if (err) {
            return next(err);
        };

        if (!user) {
            return res.status(401).json({ message: info.message });
        };

        req.login(user, {session : false }, async (err) => {
            if (err) {
                return next(err);
            };

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn : '1h'});

            return res.json({token, user});
        }); 
    }) (req, res, next);
});

module.exports = loginRouter;
