const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/user");
const { depositAmount, getAllDeposits } = require("../controllers/deposit");
router.route("/").get(authenticateUser, getAllUsers);
// router.route("/showme").get(authenticateUser, showCurrentUser);
router.route("/dashboard").get(authenticateUser, showCurrentUser);
router.route("/updateUser").patch(authenticateUser, updateUser);
router.route("/updateUserPassword").patch(authenticateUser, updateUserPassword);
// router.route("/:id").get(authenticateUser, getSingleUser);
router.route("/deposit").get(getAllDeposits).post(depositAmount);
router.route("/grab-order").get((req, res) => {
  res.render("grabOrder", { layout: false });
});
module.exports = router;
