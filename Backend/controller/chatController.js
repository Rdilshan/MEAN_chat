const express = require("express");
const mongoose = require("mongoose");
const chat = require("../model/chat");
const User = require("../model/user");

const chatcreate = async (req, resp) => {
  try {
    const userid = req.user._id;
    const requestData = req.body.refid;
    if (!mongoose.Types.ObjectId.isValid(requestData)) {
      return resp.status(400).json({ error: "Invalid refid format" });
    }
    var id = requestData;
    const finduser = await User.findById(id);

    if (finduser) {
        
      const newChat = new chat({
        users: [requestData, userid],
        createdAt: new Date(),
      });

      newChat
        .save()
        .then((savedChat) => {
          resp.status(201).json({ msg: savedChat });
        })
        .catch((error) => {
          resp.status(500).json({ error: error.message });
        });
    }
  } catch (error) {
    console.error("Error finding user:", error);
    resp.status(500).json({ error: "Internal Server Error" });
  }
};

const getchats = (req, resp) => {
  const userid = req.user._id;
  chat
    .find({ users: userid })
    .then((chats) => {
      resp.status(200).json(chats);
    })
    .catch((err) => {
      resp.status(500).json({ error: err.message });
    });
};

module.exports = {
  chatcreate,
  getchats,
};
