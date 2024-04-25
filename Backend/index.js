const express = require("express");
const mongoose = require("mongoose");
const app = express();
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config();

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("./model/user");
const currentDate = new Date();

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});


app.use(session({
  secret: 'your-secret-key', // Replace 'your-secret-key' with your actual secret key
  resave: false,
  saveUninitialized: false
}));


// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/user/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      //runing some code

      User.findOne({ googleid: profile.id }).then((currentuser) => {
        if (currentuser) {
          console.log("already this user registed");
          done(null, currentuser);
        } else {
          new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            profilepic: profile.photos[0].value,
            googleid: profile.id,
            createdAt: currentDate,
          })
            .save()
            .then((newuser) => {
              console.log("new user", newuser);
              done(null, newuser);
            })
            .catch((err) => {
              console.error("Error creating new user:", err);
            });
        }
      });
    }
  )
);

mongoose.connect("mongodb://localhost:27017/chat").then(() =>
  app.listen(3000, () => {
    console.log("Server started on port 3000 & mongoose conneted");
  })
);

const userRoute = require("./route/UserRoute");
app.use("/api/user", userRoute);
