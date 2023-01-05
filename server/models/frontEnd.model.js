const mongoose = require('mongoose');
const frontEndSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    html: {},
    style: {},
}, {timestamps: true});
module.exports.FrontEnd = mongoose.model('frontEnd', frontEndSchema)