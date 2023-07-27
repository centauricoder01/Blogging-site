"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupUser = void 0;
const { AuthModel } = require("../Models/Signup");
function SignupUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, email, password, role } = req.body;
            const findOneEmail = yield AuthModel.findOne({ email });
            if (findOneEmail) {
                return res.send({
                    message: "User Already Exist please enter new Email...",
                });
            }
            const newUser = new AuthModel({
                username,
                email,
                password,
                role,
            });
            let ReturnedUser = yield newUser.save();
            res.send({ user: ReturnedUser, message: "User Registered Successful" });
        }
        catch (error) {
            res.status(400).send({ error: "There is some Error" + error });
        }
    });
}
exports.SignupUser = SignupUser;
