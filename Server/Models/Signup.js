const mongoose = require("mongoose");

const reqString = { type: String, required: true };

const AuthSchema = mongoose.Schema(
  {
    name : reqString, 
    username: reqString,
    email: reqString,
    role: reqString,
    password: reqString,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AuthModel = mongoose.model("Users", AuthSchema);

module.exports = { AuthModel };
