const express = require("express");
const passport = require("passport");
const session = require('express-session');

const userRegistation = (req, resp) => {
  // resp.status(200).json({data:"runing"})
  passport.authenticate("google", { scope: ["profile"] });
};

const callback = (req, resp) => {
  resp.status(204).json({ data: "runing" });
};

const getuser = (req, resp) => {
    const sessionData = req.session;
  try {
    if (!req.user) {
      resp.status(404).json({ msg: "empty",data:sessionData});
    } else {
      resp.status(204).json({ msg: "data", data: req.user });
    }
  } catch (error) {
    resp.status(404).json({ msg: "empty", data: error });
  }
};
module.exports = { userRegistation, callback, getuser };
