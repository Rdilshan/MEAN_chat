const express = require("express");
const chat = require("../model/chat")

const chatcreate = (req,resp)=>{
    const userid = req.user._id
    const requestData = req.body;

    const newChat = new chat({
        users: [...requestData.users, userId],
        createdAt: new Date() 
    });

    newChat.save()
        .then(savedChat => {
            resp.status(201).json({msg:savedChat});
        })
        .catch(error => {
            resp.status(500).json({ error: error.message });
        });
}

const getchats = (req,resp)=>{
    const userid = req.user._id
    chat.find({ users: userid })
        .then(chats => {

            resp.status(200).json(chats);
        })
        .catch(err => {
            resp.status(500).json({ error: err.message });
        });
}

module.exports = {
    chatcreate,
    getchats
};