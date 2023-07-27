"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const reqString = {
    type: String,
    required: true,
};
const reqNumber = {
    type: Number,
    required: true,
};
const courseSchema = new mongoose_1.default.Schema({
    title: reqString,
    desc: reqString,
    createdBy: reqString,
    rating: reqNumber,
    price: reqNumber,
    dateOfPublish: reqString,
    courseInclude: [],
    reviews: [],
    totalPurchase: reqNumber,
}, {
    timestamps: true,
    versionKey: false,
});
const courseModel = mongoose_1.default.model("Courses", courseSchema);
exports.courseModel = courseModel;
