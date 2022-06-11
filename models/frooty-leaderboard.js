const mongoose = require('mongoose')

const FrootyLeaderboard = mongoose.model('frooty-leaderboard',{
    username: {
        type:String,
        require: true
    },
    turn: {
        type:String,
        require: true
    },
    score: {
        type:String,
        require: true
    }
})

module.exports = { FrootyLeaderboard }