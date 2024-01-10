const Joi = require("joi");
const apiResponse = require("../utils/apiResponse");

exports.register = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    phonenumber: Joi.string().pattern(new RegExp("^[0-9]{10,11}$")).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const userData = {
    username: req.body.username,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    password: req.body.password,
  };
  const { error } = schema.validate(userData);
  if (error) {
    return apiResponse.errorResponse(res, error.details[0].message);
  }

  next();
};
