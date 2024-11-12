const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://nuel6700mongodb:nuel6700mongodb@cluster0.vwcf6.mongodb.net/"
  )
  .then(() => console.log("Database connected sucessfully"))
  .catch((err) => console.log(err));
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//  Create user model
const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    // // create a new document / user
    // const newUser = await User.create({
    //   name: "Jane Doe",
    //   email: "janeDoe1@dev.com",
    //   age: 18,
    //   isActive: true,
    //   tags: ["developer"],
    // });
    // const newUser = new User({
    //   name: "Emmy",
    //   email: "Emmy@dev.com",
    //   age: 50,
    //   isActive: true,
    //   tags: ["Admin", "project manager", "entrepreneur"],
    // });
    // await newUser.save();
    // console.log("Created new user", newUser);
    // // lists all the users
    // const allUsers = await User.find({});
    // console.log(allUsers);
    // console.log("Created new user", newUser);
    // console.log("Created new user", newUser);
    // const allUsers = await User.find({});
    // // find a specific users
    // const getUserOfActiveFalse = await User.find({ isActive: false });
    // const getUserOfActiveFals    const getUserOfActiveFalse = await User.find({ isActive: false });
    // const getUserOfActiveFalse = await User.find({ isActive: false });
    // const getUserOfActiveFalse = await User.find({ isActive: true });
    // console.log(getUserOfActiveFalse);
    // // console.log(allUsers);
    // const getJohnDoeUser = await User.findOne({ name: "John Doe" });
    // console.log(getJohnDoeUser);
    // const getLastCreatedUserByUserId = await User.findById(newUser._id);
    // console.log(getLastCreatedUserByUserId, "getLastCreatedUserByUserId");
    // const selectedFields = await User.find().select("name email -_id");
    // console.log(selectedFields);
    // const limitedUsers = await User.find().limit(5).skip(1);
    // console.log(limitedUsers)
    // const sortedUsers = await User.find().sort({ age: -1 }); // decendening order
    // const sortedUsers = await User.find().sort({ age: 1 }); // ascending order
    // console.log(sortedUsers);
    // const countDocuments = await User.countDocuments({ isActive: true });
    // console.log(countDocuments);
    // const deletedUser = await User  .findByIdAndDelete(newUser._id)
    // console.log(deletedUser);
  } catch (error) {
    console.log("Error ->", error);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();
