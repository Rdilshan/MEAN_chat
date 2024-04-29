const express = require("express");
const passport = require("passport")

const userRegistation = (req, resp) => {
    // resp.status(200).json({data:"runing"})
    passport.authenticate('google', { scope: ['profile'] });
};


const callback=(req,resp)=>{
    resp.status(204).json({data:"runing"})

}

const get=(req,resp)=>{
    const user = req.user._id;
    if (!user) {
        resp.status(404).json({msg: "empty"});
    } else {
        resp.status(204).json({msg: "data", data: user});
    }
}
module.exports = { userRegistation,callback,get };
