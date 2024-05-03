const prisma = require('../database/prima');

const addIncomeAndExpense = async (req, res) => {
    const { type, utilisateur, montant, categories } = req.body;

    if (type === 'revenu') {
        try {
            const createIncome = await prisma.revenuMensuelle.create({
                data: {
                    montant: montant,
                    date: new Date(),
                    utilisateur: { connect: { id: utilisateur }}
                }
            });
            res.status(200).json({ message: 'Revenu ajouté avec succès', createIncome });
        } catch (error) {
            console.error("Erreur lors de l'ajout du revenu : ", error);
            res.status(500).json({ message: "Erreur lors de l'ajout du revenu" });
        }
    } else if (type === 'depense') {
        try {
            const createExpense = await prisma.depenses.create({
                data: {
                    categories: categories,
                    montant: montant,
                    date: date,
                    heure: date,
                    utilisateur: { connect: { id: utilisateur }}
                }
            });
            res.status(200).json({ message: 'Dépense ajoutée avec succès', createExpense });
        } catch (error) {
            console.error("Erreur lors de l'ajout de la dépense : ", error);
            res.status(500).json({ message: "Erreur lors de l'ajout de la dépense" });
        }
    } else {
        res.status(400).json({ message: 'Type de requête non spécifié' });
    }
};

module.exports = { addIncomeAndExpense };
