const { hashData } = require("../utils/password.util");
const { userService } = require("../services/services");

const register = async (req, res) => {
  try {
    const data = { ...req.body };
    const password = data.password;
    const encryptPass = hashData(password);
    const newUser = {
      username: data.username,
      phonenumber: data.phonenumber,
      birthday: data.birthday,
      gender: data.gender,
      email: data.email,
      password: encryptPass,
    };

    const user = await userService.create(newUser);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = {
  register,
};
