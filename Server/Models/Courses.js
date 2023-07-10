const mongoose = require("mongoose");

const reqString = {
  type: String,
  required: true,
};

const reqNumber = {
  type: Number,
  required: true,
};

const courseSchema = mongoose.Schema(
  {
    title: reqString,
    desc: reqString,
    createdBy: reqString,
    rating: reqNumber,
    price: reqNumber,
    dateOfPublish: reqString,
    courseInclude: [],
    reviews: [],
    totalPurchase: reqNumber,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const courseModel = mongoose.model("Courses", courseSchema);

module.exports = { courseModel };
