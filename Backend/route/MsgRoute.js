const express = require("express");
const router = express.Router();
const middleware = require("../middleware/userchecking")
const MsgController = require("../controller/MsgController")


router.post("/create",middleware.checking,MsgController.addmsg);
router.get("/get",middleware.checking,MsgController.getmsg);


module.exports = router