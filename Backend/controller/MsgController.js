
const Massage = require("../model/massage");

const addmsg=(req,res)=>{
    res.status(201).json({ msg: "call create msg ..." });
}
 const getmsg=(req,res)=>{
    res.status(201).json({ msg: "call geting msg..." });

 }

 const demoCreate = async (req, res) => {
    try {
        const demoData = [
            {
                chatid: "chat1",
                sender: "user1",
                receiver: "user2",
                message: "Hello, how are you?",
                createdAt: new Date()
            },
            {
                chatid: "chat1",
                sender: "user2",
                receiver: "user1",
                message: "I'm good, thanks! How about you?",
                createdAt: new Date()
            },
            {
                chatid: "chat2",
                sender: "user3",
                receiver: "user4",
                message: "Hey, what's up?",
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
