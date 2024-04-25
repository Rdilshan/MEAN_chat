const mongoose = require("mongoose");
const Userschema = new mongoose.Schema({
    name: String,
    email: String,
    profilepic: String,
    googleid: String,
    createdAt: Date,
   
})

module.exports = mongoose.model("User", Userschema)