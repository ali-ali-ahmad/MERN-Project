const mongoose = require('mongoose');
const frontEndSchema = new mongoose.Schema({
    html: {
        type: Array
    },

    width: {type:Number},
    height: {type:Number},
    color: {type:String},
    BGColor: {type:String},
}, {timestamps: true});
module.exports.FrontEnd = mongoose.model('frontEnd', frontEndSchema)