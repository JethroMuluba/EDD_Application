const express =  require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

require('./middlewares/passport_config');


const dashboardRoute = require('./routes/dashboard');
const userRegister = require('./routes/register');
const loginRouter = require("./routes/login");
const passport = require('passport');
const confirmRouter = require('./routes/confirm');
const usersRouter = require('./routes/users');


//Import Dotenv
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(passport.initialize());

//Set User Route
app.use('/', usersRouter);
//Set Login Route
app.use('/login', loginRouter);
//Set register Route
app.use('/register', userRegister);
//Set Confirmed Route
app.use('/register_confirm', confirmRouter);

//Set Dashboard Route
app.use('/dashboard', dashboardRoute);






app.listen(PORT, () => {
    console.log(`Server is runing on port : ${PORT}`);
})