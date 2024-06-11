const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require("express-session");

app.set("trust proxy", 1); 
const dotenv = require("dotenv");
dotenv.config();

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const corsOptions = {
  origin: 'https://mean-chat.vercel.app', // Frontend URL
  credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const User = require("./model/user");
const currentDate = new Date();

app.use(session({
  secret: 'your-secret-key',
  resave: false,
    saveUninitialized: true,
    proxy: true, // Required for Heroku & Digital Ocean (regarding X-Forwarded-For)
    name: 'MyCoolWebAppCookieName', // This needs to be unique per-host.
    cookie: {
      secure: true, // required for cookies to work on HTTPS
      httpOnly: false,
      sameSite: 'none'
    }
  }
));

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());


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

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://mean-chat-backend.vercel.app/api/user/auth/google/callback",
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

mongoose.connect("mongodb+srv://rd118755:bAlv237ZphvskAsu@chatdb.vkz0y31.mongodb.net/chat?retryWrites=true&w=majority&appName=chatdb").then(() =>
  app.listen(3000, () => {
    console.log("Server started on port 3000 & mongoose conneted");
  })
);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const userRoute = require("./route/UserRoute");
const chatRoute = require("./route/chatRoute");
const MsgRoute = require("./route/MsgRoute");


app.use("/api/user", userRoute);
app.use("/api/chat", chatRoute);
app.use("/api/msg", MsgRoute);


