// requirements: import mongoose
const mongoose = require('mongoose');

// Connect to a local database called "sportstown"
// This also makes "sportstown" available in list of DBs in Mongo Compass
const connectionString = "mongodb://localhost/sportstown";

// When it connects, then console.log "Connected to MongoDB"
mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("Connected to MongoDB at: " + connectionString);
  });

// export mongoose connection
module.exports = mongoose;