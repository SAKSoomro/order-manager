const mongoose = require("mongoose");
const depositSchema = new mongoose.Schema({
  depositAmount: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
module.exports = mongoose.model("Deposit", depositSchema);
