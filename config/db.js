const mongoose = require('mongoose');
const colors = require('colors');

//mongoose database connection
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log(`Connected to Databse ${mongoose.connection.host } `.bgWhite);
  } catch (error) {
    console.log("DB error", error);
    
  }
}

module.exports = connectDb;