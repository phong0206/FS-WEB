const Joi = require("joi");

exports.register = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    phonenumber: Joi.string().pattern(new RegExp("^[0-9]{10,11}$")).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });

  return schema.validate(user);
};
