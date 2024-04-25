const mongoose = require("mongoose")
const ChatSchema = new mongoose.Schema({
    users: [String],
    createdAt: Date,
})
module.exports = mongoose.model("Chat", ChatSchema)