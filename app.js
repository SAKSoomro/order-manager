require("express-async-errors");
require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const { notFound, errorHandler } = require("./middleware");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const expressLayouts = require("express-ejs-layouts");
const axios = require("axios");
const cookieParser = require("cookie-parser");
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.json());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.JWT_SECRET));
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("CONNECTED TO THE SERVER..."));
  } catch (error) {
    console.log(error);
  }
};
start();
