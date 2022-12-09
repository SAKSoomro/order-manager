const express = require("express");
const router = express.Router();

const { register, login, logout } = require("../controllers/auth");

router
  .route("/register")
  .post(register)
  .get((req, res) => {
    res.render("register", { layout: false });
  });
router
  .route("/login")
  .post(login)
  .get((req, res) => res.render("login", { layout: false }));
router.get("/logout", logout);

module.exports = router;
