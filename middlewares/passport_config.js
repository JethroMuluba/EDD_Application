const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const jwtSecret = process.env.JWT_SECRET;
const prisma = require('../database/prima');


passport.use(new LocalStrategy({usernameField : 'email'}, async (email, password, done) => {
    try {
        const utilisateur = await prisma.utilisateur.findUnique({email});

        if(!utilisateur) {
            return done(null, false, {message : 'Email incorrect'});
        };

        const passwordCompare = await bcrypt.compare(password, utilisateur.password);

        if(!passwordCompare) {
            return done(null, false, {message : 'Mot de passe incorrect'});
        };

        return done(null, utilisateur)
    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
    try {
        const utilisateur = await prisma.utilisateur.findById(id);
        done(null, utilisateur)
    } catch (error) {
        done(error);
    }
});

module.exports = passport;
