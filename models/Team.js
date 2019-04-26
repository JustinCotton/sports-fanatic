const mongoose = require('../db/connection.js');

// defines structure of team entity
const TeamSchema = new mongoose.Schema({
    cityName: String,
    teamName: String,
    teamLogo: String,
    players: [PlayerSchema],
    teamStats: {
        wins: Number,
        losses: Number,
        championships: Number,
    },
    stadium: String,
    inPlayoffPosition: Boolean
});
  
// export the Team model with module.exports
module.exports = mongoose.model('Team', TeamSchema);