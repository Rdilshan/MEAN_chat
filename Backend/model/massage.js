const mongoose = require("mongoose")
const MassageSchema = new mongoose.Schema({
    chatid:String,
    sender: String,
    reciver: String,
    message: String,
    createdAt: Date,
})
module.exports = mongoose.model('Massage',MassageSchema)