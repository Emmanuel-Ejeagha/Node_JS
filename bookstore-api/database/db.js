const mongoose = require("mongoose");
const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nuel6700:nuel6700db@cluster0.gvuxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database is connected succesfully!");
  } catch (error) {
    console.error("Mongodb connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
