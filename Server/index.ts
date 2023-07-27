import express from "express";
import cors  from "cors";
import mongoose  from "mongoose";

// ENDPOINT CONTROLLER ARE IMPORT HERE
import { CheckHeader }  from "./Middleware/Checkheader";
import { SignupUser }  from "./Controllers/Signup";
import { LoginUser }  from "./Controllers/Login";
import { addCourse }  from "./Controllers/Courses";

// MIDDLEWARE START FROM HERE
const app = express()
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
app.post("/addcourse", addCourse)

// DATABASE CONNECTION START FROM HERE

const mongoURL: string = process.env.MONGO_URL || "Default_URl";

mongoose
  .connect(mongoURL, {})
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);
