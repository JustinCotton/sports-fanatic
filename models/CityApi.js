const mongoose = require('../db/connection.js');

// defines structure of city entity
const CitySchema = new mongoose.Schema({
    cityName: String,
    cityPhoto: String,
    cityNickname: String,
    cityStats: {
        hits: Number,
        averageTemp: Number,
        RBIs: Number,
        HRs: Number,
        steals: Number,
        errors: Number
    },
    players: [PlayerSchema],
    teams: [TeamSchema],
});
  
// export the City model with module.exports
module.exports = mongoose.model('City', CitySchema);