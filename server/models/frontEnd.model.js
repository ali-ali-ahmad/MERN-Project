const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const frontEndSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    html: {},
    style: {},
    userProjects:{type: ObjectId,
        ref: "User"},
}, {timestamps: true});
module.exports.FrontEnd = mongoose.model('frontEnd', frontEndSchema)