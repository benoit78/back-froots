const express = require("express");
const router = express.Router();
const keys = require("./../config/keys");

const { Leaderboard } = require('../models/leaderboard');

router.get('/api/leaderboard', (req, res) => {
    Leaderboard.find({}, (err, data) => {
        if(!err) {
            res.send(data)
        } else {
            console.log(err)
        }

    })
})

router.post("/api/leaderboard", (req, res) => {
    const emp = new Leaderboard({
        username: req.body.username,
        turn: req.body.turn,
        time: req.body.time
    });
    emp.save((err, data)=>{
        res.status(200).json({ code: 200, message: 'username added successfully', addUsername: data})
    });
});

module.exports = router;