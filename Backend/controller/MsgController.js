

const addmsg=(req,res)=>{
    res.status(201).json({ msg: "call create msg ..." });
}
 const getmsg=(req,res)=>{
    res.status(201).json({ msg: "call geting msg..." });

 }

module.exports = {
    addmsg,
    getmsg
};
