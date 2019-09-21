var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    // burger.all(function (data) {
    //     var hbsObject = {
    //         burger: data
    //     };
    // });
    res.send("What up, its Ya boi")
    console.log("What up, its Ya boi");
});

module.exports = router;