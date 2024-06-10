const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");
const passport = require("passport")
const middleware = require("../middleware/userchecking")


router.get("/create", passport.authenticate('google', { scope: ['profile','email'] }));
router.get("/auth/google/callback",passport.authenticate('google'), (req, resp) => {
    // resp.send(req.user);

    resp.redirect("https://mean-chat.vercel.app/");  
});
router.get("/logout",(req,resp)=>{
    req.session.destroy(function (err) {
        resp.redirect('/api/user/home'); 
      });
})
router.get("/home", middleware.checking, (req, resp) => {
    resp.status(200).json({data: req.user });
    // resp.send(req.user._id);
});
router.get("/getuser",userController.getuser);

module.exports = router