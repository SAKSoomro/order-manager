const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter your name"],
  },
  email: {
    type: String,
    required: [true, "Enter your email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Enter a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Enter your password"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  accountBalance: {
    type: Number,
    default: 0,
  },
  rechargeRequired: {
    type: Number,
    default: 0,
  },
  totalCommissions: {
    type: Number,
    default: 0,
  },
  todaysEarnings: {
    type: Number,
    default: 0,
  },
  completedTasks: {
    type: Number,
    default: 0,
  },
  pendingTasks: {
    type: Number,
    default: 0,
  },
  totalTasks: {
    type: Number,
    default: 0,
  },
  completedOrder: {
    type: String,
    default: "none",
  },
  pendingOrders: {
    type: String,
    default: "none",
  },
});
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
userSchema.methods.comparePassword = async function (_password) {
  const isMatch = await bcrypt.compare(_password, this.password);
  return isMatch;
};
module.exports = mongoose.model("User", userSchema);
