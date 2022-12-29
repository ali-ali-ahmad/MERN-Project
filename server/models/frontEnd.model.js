const mongoose = require('mongoose');
const frontEndSchema = new mongoose.Schema({
    html: {
        type: Array
    },
    //     type:
    // style: { Array
    // },
    width: {type:Number},
    height: {type:Number},
    color: {type:String},
    BGColor: {type:String},
    // style: {
    //     width: Number,
    //     height: Number,
    //     color: String,
    //     BGColor: String,
    // },
}, {timestamps: true});
module.exports.FrontEnd = mongoose.model('frontEnd', frontEndSchema)