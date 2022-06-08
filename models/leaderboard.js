const mongoose = require('mongoose')

const Leaderboard = mongoose.model('leaderboard',{
    username: {
        type:String,
        require: true
    },
    turn: {
        type:String,
        require: true
    },
    time: {
        type:String,
        require: true
    }
})

module.exports = { Leaderboard }
