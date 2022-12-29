const { FrontEnd } = require("../models/frontEnd.model");

module.exports.createFrontEnd = (request, response) => {
    const { html, width, height, color, BGColor } = request.body;
    FrontEnd.create({
        html,
        width,
        height,
        color,
        BGColor,
    })
        .then((frontEnd) => response.json(frontEnd))
        .catch((err) => response.json(err));
};

module.exports.getAllFrontEnd = (request, response) => {
    FrontEnd.find({})
        .then((frontEnds) => response.json(frontEnds))
        .catch((err) => response.json(err));
};

module.exports.getFrontEnd = (request, response) => {
    FrontEnd.findOne({ _id: request.params.id })
        .then((frontEnd) => response.json(frontEnd))
        .catch((err) => response.json(err));
};

module.exports.updateFrontEnd = (request, response) => {
    FrontEnd.findOneAndUpdate(
        { _id: request.params.id },
        { $push: request.body},
        { new: true }
    )
    .then((updatedFrontEnd) => response.json(updatedFrontEnd))
    .catch((err) => response.json(err));
};

module.exports.deleteFrontEnd = (request, response) => {
    FrontEnd.deleteOne({ _id: request.params.id })
        .then((deleteConfirmation) => response.json(deleteConfirmation))
        .catch((err) => response.json(err));
};
