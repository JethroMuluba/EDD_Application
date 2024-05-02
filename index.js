const express =  require('express');
const app = express();

//Import Dotenv
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;



app.get('/', (req,res) => {
    res.status(200).send("Welcome to EDD_App");
}),


app.listen(PORT, () => {
    console.log(`Server is runing on port : ${PORT}`);
})