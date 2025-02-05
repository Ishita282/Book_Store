const mongodb = require("mongoose");

const connectdb = async () => {
  try {
    await mongodb.connect(process.env.MONGODB_URL, {
      //I don't understand this
      userNewURLParser: true,
      userUnifiedTopology: true,
    }),
      console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectdb;
