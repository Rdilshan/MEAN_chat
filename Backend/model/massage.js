const mongoose = require("mongoose")
const MassageSchema = new mongoose.Schema({
    sender: String,
    reciver: String,
    message: String,
    createdAt: Date,
})
module.exports = mongoose.model('Massage',MassageSchema)