const prisma = require('../database/prima');


const dashboardCtr = async (req, res) => {
    try {
        createIncome = await prisma.revenuMensuelle.create({
            data : {
                    montant : req.body.montant,
                    date : new Date(),
            }
        });
        res.status(200).json(createIncome);
        console.log('Amount is successfully Added');
    } catch (error) {
        res.status(500);
        console.log(error);
    }
}

module.exports = dashboardCtr;