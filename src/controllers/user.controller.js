const userService = require("../services/user.services");

const signIn = async (req, res) => {
  try {
    const user = await userService.signIn(req.body);
    const token = userService.token(req.body);

    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const signUp = async (req, res) => {
  try {
    const newUser = await userService.signUp(req.body);
    return res.status(201).json({ newUser });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

module.exports = {
  signIn,
  signUp,
};
