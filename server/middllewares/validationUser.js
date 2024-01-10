const { errorResponse } = require("../utils/apiResponse");
const { validationUser } = require("../validations/validations");

const validationRegister = async (req, res, next) => {
  try {
    const userData = {
      username: req.body.username,
      phonenumber: req.body.phonenumber,
      email: req.body.email,
      password: req.body.password,
    };
    const { error } = validationUser.register(userData);
    if (error) {
      return errorResponse(res, error.details[0].message);
    }

    next();
  } catch (err) {
    return errorResponse(res, "Internal Server Error");
  }
};

module.exports = {
  validationRegister,
};
