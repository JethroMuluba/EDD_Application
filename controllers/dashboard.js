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
}

module.exports = addIncoling;