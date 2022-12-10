const Withdraw = require("../models/withdraw");
const withdrawAmount = async (req, res) => {
  req.body.user = req.user.userId;
  const widthdrawAmount = await Withdraw.create(req.body);
  res.redirect("/user/withdraw");
};
const getAllWithdrawals = async (req, res) => {
  const withdraw = await Withdraw.find({}).select("approved");
  res.render("withdraw", { layout: false, withdraw: withdraw });
};
module.exports = { withdrawAmount, getAllWithdrawals };
