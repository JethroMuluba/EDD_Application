const prisma = require('../database/prima');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const confirmCtrl = async (req, res) => {
    const { email, confirmationCode } = req.body;

    try {
        const user = await prisma.utilisateur.findUnique({
            where : { email },
        });

        if (!user) {
            return res.status(400).json({message: 'Utilisateur non trouver'});
        };

        if (user.confirmationCode !== confirmationCode) {
            return res.status(400).json({message: 'Code de confirmation non valide'});
        };

        await prisma.utilisateur.update({
            where: { email },
            data: { isConfirmed: true, confirmationCode: null },
        });

        const token = jwt.sign({id : user.id }, process.env.JWT_SECRET, { expiresIn : '1h'});

        res.status(200).json({message : 'Votre compte est confirmé avec succès', token});
    } catch (error) {
        res.status(500).json({message : 'Erreur lors de la confirmation de votre compte', error});
        ;
    };
};

module.exports = confirmCtrl;