"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
// ENDPOINT CONTROLLER ARE IMPORT HERE
const Checkheader_1 = require("./Middleware/Checkheader");
const Signup_1 = require("./Controllers/Signup");
const Login_1 = require("./Controllers/Login");
const Courses_1 = require("./Controllers/Courses");
// MIDDLEWARE START FROM HERE
const app = (0, express_1.default)();
require("dotenv").config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// PORT START FROM HERE
app.get("/", (req, res) => {
    res.send("Welcome Back sir Ji");
});
// ADDING EXRTA LAYER OF AUTHTICATION
app.use(Checkheader_1.CheckHeader);
app.post("/signup", Signup_1.SignupUser);
app.post("/login", Login_1.LoginUser);
app.post("/addcourse", Courses_1.addCourse);
// DATABASE CONNECTION START FROM HERE
mongoose_1.default
    .connect(process.env.MONGO_URL, {})
    .then(() => {
    console.log("DB Connetion Successfull");
})
    .catch((err) => {
    console.log(err);
});
app.listen(process.env.PORT, () => console.log(`Server started on ${process.env.PORT}`));
