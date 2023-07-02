const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// ENDPOINT CONTROLLER ARE IMPORT HERE
const { CheckHeader } = require("./Middleware/Checkheader");
const { SignupUser } = require("./Controllers/Signup");
const { LoginUser } = require("./Controllers/Login");

// MIDDLEWARE START FROM HERE
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

// PORT START FROM HERE

app.get("/", (req, res) => {
  res.send("Welcome Back sir Ji");
});

// ADDING EXRTA LAYER OF AUTHTICATION
app.use(CheckHeader);
app.post("/signup", SignupUser);
app.post("/login", LoginUser);

// DATABASE CONNECTION START FROM HERE
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);
