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
    allStar: Boolean,
    cityName: String,
    teamName: String
});
  
// export the Player model with module.exports
module.exports = mongoose.model('Player', PlayerSchema);