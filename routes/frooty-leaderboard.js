const express = require("express");
const router = express.Router();
const keys = require("./../config/keys");

const { FrootyLeaderboard } = require('../models/frooty-leaderboard');

router.get('/api/frooty-leaderboard', (req, res) => {
    FrootyLeaderboard.find({}, (err, data) => {
        if(!err) {
            res.send(data)
        } else {
            console.log(err)
        }

    })
})

router.post("/api/frooty-leaderboard", (req, res) => {
    const emp = new FrootyLeaderboard({
        username: req.body.username,
        score: req.body.score
    });
    emp.save((err, data)=>{
        res.status(200).json({ code: 200, message: 'username added successfully', addUsername: data})
    });
});

module.exports = router;