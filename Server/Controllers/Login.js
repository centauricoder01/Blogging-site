const { AuthModel } = require("../Models/Signup");

async function LoginUser(req, res) {
  try {
    const { username, email, password } = req.body;

    const findOneEmail = await AuthModel.findOne({ email });
    if (!findOneEmail) {
      return res.status(400).send({ error: "There is no Email, like this..." });
    }

    const findByUsername = await AuthModel.findOne({ username });
    if (!findByUsername) {
      return res
        .status(400)
        .send({ error: "There is no UserName, like this..." });
    }

    const FindByPassword = await AuthModel.findOne({ password });
    if (!FindByPassword) {
      return res.status(400).send({ error: "Password Does'nt Match " });
    }

    res.status(200).send({
      message: "User Login Successfully",
      UserId: "I will Provide it Later...",
    });
  } catch (error) {
    res.status(400).send({ error });
  }
}

module.exports = { LoginUser };
