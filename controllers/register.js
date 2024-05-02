const prisma = require('../database/prima');
const bcrypt  = require("bcrypt");

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
                password : hashedPassword
            }
        });
        res.status(201).json(createUser);
        console.log('User successfully Registered');
    } catch (error) {
        console.log('Error while user registration : ', error);
        res.status(500);
    }
}

module.exports = registerCtr;