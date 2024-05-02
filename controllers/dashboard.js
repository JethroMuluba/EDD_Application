const prisma = require('../database/prima');


const addIncoling = async (req, res) => {
    const {utilisateur} = req.body
    try {
        createIncome = await prisma.revenuMensuelle.create({
            data : {
                    montant : req.body.montant,
                    date : new Date(),
                    utilisateur : { connect : { id : utilisateur }}
            }
        });
        res.status(200).json(createIncome);
        console.log('Amount is successfully Added');
    } catch (error) {
        res.status(500);
        console.log(error);
    }
};

const addExpenses = async (req, res) => {
    const date = new Date();
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };
    const dateForma = date.toLocaleDateString('en-US', options).replace(/\//g, '-');
    const heureForma = new Date().getHours() + ":" + new Date().getMinutes();

    const {utilisateur, categories} = req.body;
    try {
        createExpenses = await prisma.depenses.create({
            data : {
                montant : req.body.montant,
                date : dateForma,
                heure : heureForma,
                utilisateur : { connect : { id : utilisateur }},
                categories : { connect : { id : categories }}
            }
        })
    } catch (error) {
        
    }
}

module.exports = {addIncoling, addExpenses};