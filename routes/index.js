const express = require("express");
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');

router.get("/", (req, res) => {
    // console.log(req.oidc.isAuthenticated());
    res.render("index",
        {
            title: "Express",
            isAuthenticated: req.oidc.isAuthenticated(),
            user: req.oidc.user,
        });
});

router.get("/secured", requiresAuth(), (req, res) => {
    res.render("secured",
        {
            title: "secured section",
            isAuthenticated: req.oidc.isAuthenticated(),
            user: req.oidc.user,
        });
});

module.exports = router;    