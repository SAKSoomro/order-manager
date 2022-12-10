const Deposit = require("../models/deposit");
const depositAmount = async (req, res) => {
  req.body.user = req.user.userId;
  const depositAmount = await Deposit.create(req.body);
  res.redirect("/user/deposit");
};
const getAllDeposits = async (req, res) => {
  const deposits = await Deposit.find({}).select("approved");
  res.render("deposit", { layout: false, deposits: deposits });
};
module.exports = { depositAmount, getAllDeposits };
