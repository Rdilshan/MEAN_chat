const express = require("express");
const passport = require("passport")

const userRegistation = (req, resp) => {
    // resp.status(200).json({data:"runing"})
    passport.authenticate('google', { scope: ['profile'] });
};


const callback=(req,resp)=>{
    resp.status(204).json({data:"runing"})

}
module.exports = { userRegistation,callback };
