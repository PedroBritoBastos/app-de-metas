const mongoose = require('mongoose');
require('dotenv').config();

/**
 * creates a connection
 */
const uri = process.env.DB_CREDENTIALS;
const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri);
    console.log("conectado ao banco");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectToDatabase;