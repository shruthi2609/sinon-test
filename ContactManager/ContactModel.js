const mongoose = require('mongoose');
const Schema = mongoose.Schema

var ContactSchema = new Schema({
    fname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
   
});

module.exports = mongoose.model('ContactSinon', ContactSchema);