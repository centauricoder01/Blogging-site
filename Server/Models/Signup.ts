import mongoose  from "mongoose";

const reqString = { type: String, required: true };

const AuthSchema =new mongoose.Schema(
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

export { AuthModel };
