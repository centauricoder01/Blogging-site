const { AuthModel } = require("../Models/Signup");
import { Request, Response } from "express";

async function SignupUser(req:Request, res:Response) {
  try {
    const { username, email, password, role } = req.body;

    const findOneEmail = await AuthModel.findOne({ email });

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

    let ReturnedUser = await newUser.save();

    res.send({ user: ReturnedUser, message: "User Registered Successful" });
  } catch (error) {
    res.status(400).send({ error: "There is some Error" + error });
  }
}

export { SignupUser };
