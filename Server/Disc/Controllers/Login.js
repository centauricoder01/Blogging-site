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
exports.LoginUser = void 0;
const { AuthModel } = require("../Models/Signup");
function LoginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, email, password } = req.body;
            const findOneEmail = yield AuthModel.findOne({ email });
            if (!findOneEmail) {
                return res.status(400).send({ error: "There is no Email, like this..." });
            }
            const findByUsername = yield AuthModel.findOne({ username });
            if (!findByUsername) {
                return res
                    .status(400)
                    .send({ error: "There is no UserName, like this..." });
            }
            const FindByPassword = yield AuthModel.findOne({ password });
            if (!FindByPassword) {
                return res.status(400).send({ error: "Password Does'nt Match " });
            }
            res.status(200).send({
                message: "User Login Successfully",
                UserId: "I will Provide it Later...",
            });
        }
        catch (error) {
            res.status(400).send({ error });
        }
    });
}
exports.LoginUser = LoginUser;
