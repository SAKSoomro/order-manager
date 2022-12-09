const Deposit = require("../models/deposit");
const depositAmount = async (req, res) => {
  const depositAmount = await Deposit.create(req.body);
  res.status(201).json({ depositAmount });
};
const getAllDeposits = async (req, res) => {
  const deposits = await Deposit.find({});
  res.status(200).json({ deposits, count: products.length });
};
module.exports = { depositAmount, getAllDeposits };
