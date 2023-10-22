const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path: 'config.env'});
const app = express();

app.get('/', (req,res) => {
    res.send('<h1>الله أكبر</h1>');
})

const PORT = process.env.PORT || 8080 ;
app.listen(PORT, (req,res) => {
    console.log(`App is running on port ${PORT}`);
})