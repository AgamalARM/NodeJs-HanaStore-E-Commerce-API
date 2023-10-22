const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config({path: 'config.env'});

const app = express();

//middelware Before the routes

//if I want to use morgan only in developement mode
if (process.env.NODE_ENV === 'developement'){
    app.use(morgan('dev')); // morgan middelware for logger
    console.log(`mode: ${process.env.NODE_ENV}`);
    
}


//Routes
app.get('/', (req,res) => {
    res.send('<h1> API V1</h1>');
})

const PORT = process.env.PORT || 8080 ;
app.listen(PORT, (req,res) => {
    console.log(`App is running on port ${PORT}`);
})