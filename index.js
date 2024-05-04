const express =  require('express');
const app = express();
const cors = require('cors')

const dashboardRoute = require('./routes/dashboard');
const userRegister = require('./routes/register');


//Import Dotenv
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

//Set register Route
app.use('/register', userRegister);

//Set Dashboard Route
app.use('/dashboard', dashboardRoute);






app.listen(PORT, () => {
    console.log(`Server is runing on port : ${PORT}`);
})