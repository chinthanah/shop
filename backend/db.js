const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://root:root@cluster0.8w6tcve.mongodb.net/myshop1?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected");
    const fetched_data = mongoose.connection.db.collection("food");
    const data = await fetched_data.find({}).toArray();
    console.log(data);
  } catch (error) {
    console.log("Failed", error);
  }
};

module.exports = mongoDB;
