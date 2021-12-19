import DB_CONFIG from '../config/db.json';

const mongoose = require("mongoose");

exports.connect = () => {
    // Connecting to the database
    mongoose.connect(DB_CONFIG.DB_URL, () => {
        console.log("CONNECTED TO MONGODB");
      })
      .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
      });
  };