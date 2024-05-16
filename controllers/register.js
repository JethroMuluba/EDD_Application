const prisma = require('../database/prima');
const bcrypt  = require("bcrypt");
const { sendConfirmationEmail } = require('../models/mailer');

const registerCtr = async  (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const createUser = await prisma.utilisateur.create({
            data : {
                nom :  req.body.nom,
                prenom :  req.body.prenom,
                adresse :  req.body.adresse,
                telephone :   parseInt(req.body.telephone, 10),
                email : req.body.email,
                password : hashedPassword,
                confirmationCode : Math.floor(100000 + Math.random() * 900000).toString(),
                isConfirmed : false,
            },
        });

        await sendConfirmationEmail(createUser.email, createUser.confirmationCode);
        res.status(201).json(createUser);
        console.log('User successfully Registered. Please check your email for the confirmation code.');
    } catch (error) {
        console.log('Error while user registration : ', error);
        res.status(500).json({ error: 'User registration failed.' });
    }
}

module.exports = registerCtr;