const prisma = require('../database/prima');


//Get Users
const getUsers = async (req, res) => {
    try {
        const users = await prisma.utilisateur.findMany();
        res.status(201).json(users);
        console.log('Users fetching succesfuly');
    } catch (error) {
        console.error('Erreur lors de la récupération des users : ', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des users' });
    }
}

module.exports = getUsers;