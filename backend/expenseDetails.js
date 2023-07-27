const mongoose = require("mongoose");

const ExpenseDetailsScehma = new mongoose.Schema(
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
    collection: "ExpenseFin",
  }
);

mongoose.model("ExpenseFin", ExpenseDetailsScehma);
