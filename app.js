const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require("mongoose");


app.set("view engine", "ejs");
// setting up body-parser----
app.use(bodyParser.urlencoded({extended: false, limit: " 10000kb"}));
app.use(bodyParser.json());


// Setting up routes------
const email = require("./route/email");

mongoose.connect('mongodb://localhost:27017/email-verify', {useNewUrlParser: true})
        .then(() => {console.log("Connected to DB")})
        .catch((err)=> {
            console.log(err)
        });



app.use("/verify", email);



app.listen(3000, ()=> {console.log("Server Started")})