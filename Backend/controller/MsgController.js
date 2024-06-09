
const Massage = require("../model/massage");
const chat = require("../model/chat");
const massage = require("../model/massage");



const addmsg=(req,res)=>{
    res.status(201).json({ msg: "call create msg ..." });
}
 const getmsg=async (req,res)=>{
    const userid = req.user._id;
    const requestData = req.body.refid;

    const chats = await chat.find({ users: { $all: [requestData, userid] } });
    const chatIds = chats.map(chat => chat._id.toString());

    const messages = await massage.find({ chatid: { $in: chatIds } });
    res.status(201).json({ messages });

 }

 const demoCreate = async (req, res) => {
    try {
        const demoData = [
            {
                chatid: "66641d50df929f61dfaf9084",
                sender: "6621d35fb0ad64fd09f6fcc2",
                receiver: "663022e17fb57c2594a50ea9",
                message: "nice",
                createdAt: new Date()
            }
           
        ];

        await Massage.insertMany(demoData);
        res.status(200).send("Demo data created successfully!");
    } catch (error) {
        console.error("Error creating demo data:", error);
        res.status(500).send("An error occurred while creating demo data.");
    }
};

module.exports = {
    addmsg,
    getmsg,
    demoCreate
};
