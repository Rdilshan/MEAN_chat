const express = require("express");
const router = express.Router();
const middleware = require("../middleware/userchecking")
const chatcontroller = require("../controller/chatController")


router.post("/create",middleware.checking,chatcontroller.chatcreate);
router.get("/getchat",middleware.checking,chatcontroller.getchats);



module.exports = router