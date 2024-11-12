const mongoose = require("mongoose");
const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nuel6700:nuel6700db@cluster0.0pedh.mongodb.net/"
    );
    console.log("Database is connected succesfully!");
  } catch (error) {
    console.error("Mongodb connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
