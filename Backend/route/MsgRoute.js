const express = require("express");
const router = express.Router();
const middleware = require("../middleware/userchecking")
const MsgController = require("../controller/MsgController")


router.post("/create",middleware.checking,MsgController.addmsg);
router.post("/get",middleware.checking,MsgController.getmsg);
router.get("/demo",MsgController.demoCreate);



module.exports = router