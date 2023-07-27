const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    expname:String,
    name: String,
    email: { type: String, unique: true },
    password: String,
    category:String,
    doe:String,
    exp:Number,
  },
  {
    collection: "UserFin",
  }
);

mongoose.model("UserFin", UserDetailsScehma);
