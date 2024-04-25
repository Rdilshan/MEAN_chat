const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");
const passport = require("passport")
const middleware = require("../middleware/userchecking")


router.get("/create", passport.authenticate('google', { scope: ['profile','email'] }));
router.get("/auth/google/callback",passport.authenticate('google'), (req, resp) => {
    // resp.send(req.user);

    resp.redirect("/home");  
});
router.get("/logout",(req,resp)=>{
    console.log("logged out!");
    req.logout();
    res.redirect('/');
})
router.get("/home", middleware.checking, (req, resp) => {
    resp.send("home");
});

module.exports = router