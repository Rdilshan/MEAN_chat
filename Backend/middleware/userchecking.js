const express = require("express");

// Middleware function to check if the user is authenticated
const checking = (req, resp, next) => {
    // Check if req.user exists (user is authenticated)
    if (!req.user) {
        // If user is not authenticated, redirect them to the "/api/user/create" route
        // resp.redirect("/api/user/create");
        resp.status(201).json({ data: "not login" });
    } else {
        // If user is authenticated, pass the request to the next middleware in the chain
        next();
    }
};

module.exports = { checking };

