const mongoose = require("mongoose");
const depositSchema = new mongoose.Schema({
  deposit: {
    type: Number,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("Deposit", depositSchema);
