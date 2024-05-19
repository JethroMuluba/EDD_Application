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
    };
};

//Delete User
const deleteUser =  async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        await prisma.utilisateur.delete({
            where: {
                id: userId
            }
        });
        res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
        console.log('Erreur lors de la suppression de l\'utilisateur :', error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de l\'utilisateur' });
    };
};

module.exports = {getUsers, deleteUser};