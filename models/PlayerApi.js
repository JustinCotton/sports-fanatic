const mongoose = require('../db/connection.js');

// defines structure of player entity
const PlayerSchema = new mongoose.Schema({
    playerName: String,
    playerPhoto: String,
    position: String,
    playerStats: {
        hits: Number,
        average: Number,
        RBIs: Number,
        HRs: Number,
        steals: Number,
        errors: Number
    },
    isAllStar: Boolean,
    cityName: String,
    teamName: String
});

function getAllPlayers (req,res) {
    return PlayerCollection.find();
}

function createPlayer (req,res) {
    return PlayerCollection.create(req.body)}

let PlayerCollection = mongoose.model('Player', PlayerSchema);
  
// export the Player model with module.exports
module.exports = {
    PlayerCollection,
    getAllPlayers,
    createPlayer
}