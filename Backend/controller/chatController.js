const express = require("express");
const mongoose = require("mongoose");
const chat = require("../model/chat");
const User = require("../model/user");

const chatcreate = async (req, resp) => {
  try {
    const userid = req.user._id;
    const requestData = req.body.refid;
    if (!mongoose.Types.ObjectId.isValid(requestData)) {
      return resp.status(201).json({ msg: "Invalid refid format" });
    }
    var id = requestData;
    const finduser = await User.findById(id);

    if (finduser) {
      const chats = await chat.find({ users: { $all: [requestData, userid] } });

      if (chats.length === 0) {
        const newChat = new chat({
          users: [requestData, userid],
          createdAt: new Date(),
        });

        newChat
          .save()
          .then((savedChat) => {
            resp.status(201).json({ msg: "successfully added" });
          })
          .catch((error) => {
            resp.status(500).json({ error: error.message });
          });
      }else{
        resp.status(201).json({ msg: "already have this chat" });

      }
    }else{
        resp.status(201).json({ msg: "Id is wrong" });

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
