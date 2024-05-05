const express =  require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

require('./middlewares/passport_config');


const dashboardRoute = require('./routes/dashboard');
const userRegister = require('./routes/register');
const loginRouter = require("./routes/login");
const passport = require('passport');


//Import Dotenv
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const jwtSecret = process.env.JWT_SECRET;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(passport.initialize());


//Set Login Route
app.use('/login', loginRouter);
//Set register Route
app.use('/register', userRegister);

//Set Dashboard Route
app.use('/dashboard', dashboardRoute);






app.listen(PORT, () => {
    console.log(`Server is runing on port : ${PORT}`);
})