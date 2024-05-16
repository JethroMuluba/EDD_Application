const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
    host : 'smtp.office365.com' ,
    port : 587,
    secure : false,
    auth : {
        user : process.env.EMAIL_USER,
        pass : process.env.EMAIL_PASS,
    },
});

const sendConfirmationEmail = (to, confirmationCode) => {
    const mailOptions = {
        from : process.env.EMAIL_USER,
        to,
        subject: 'Confirmation de votre compte EDD',
        text: `Cher Utilisateur, Merci d'avoir choisi d'utilser EDD App. EDD App est une application intuitive qui permet aux utilisateurs de suivre et gérer facilement leurs dépenses quotidiennes, hebdomadaires ou mensuelles.
        Avec l’ajout rapide de transactions, catégorisation flexible des dépenses, visualisation de statistiques détaillées, et notifications personnalisées.
        
        Votre code de confirmation est : ${confirmationCode}. Veuillez le saisir pour continuer avec votre EDD.`,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = {sendConfirmationEmail};