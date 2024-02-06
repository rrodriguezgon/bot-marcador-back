const mongoose = require('mongoose');

const logs = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nameCommand: String,
    type: String,
    date: Date,
    stacktrace: Array
})

module.exports = mongoose.model("logs", logs);