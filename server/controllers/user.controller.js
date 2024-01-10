const { hashData } = require("../utils/password.util");
const { userService } = require("../services/services");
const { successResponse } = require("../utils/apiResponse");

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

    return successResponse(res, "Đăng ký thành công");
  } catch (error) {
    return errorResponse(res, error);
  }
};

module.exports = {
  register,
};
