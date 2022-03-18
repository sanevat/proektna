const mongoose = require('mongoose');
var schema = mongoose.Schema({
    temperature: {
        type: Number,
        reqired: true
    },
    saturation: {
        type: Number,
        reqired: true,
    },
    cough: { String }
}, { collection: 'users' })
const Userdb = mongoose.model('Userdb', schema);
module.exports = Userdb;
