"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const reqString = { type: String, required: true };
const AuthSchema = new mongoose_1.default.Schema({
    name: reqString,
    username: reqString,
    email: reqString,
    role: reqString,
    password: reqString,
}, {
    timestamps: true,
    versionKey: false,
});
const AuthModel = mongoose_1.default.model("Users", AuthSchema);
exports.AuthModel = AuthModel;
