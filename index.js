const express        = require('express');
const app            = express();
const mongoose       = require('mongoose');
const bodyParser     = require('body-parser');
const port = 8080; 
const mongoUrl = 'mongodb://localhost:27017/Contact-Hub'
const ContactM=require("./ContactManager")
mongoose.connect(mongoUrl); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/",ContactM)
app.listen(8080);	
console.log('listening on port:' + port);