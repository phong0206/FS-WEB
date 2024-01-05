const { User } = require("../models/models");

exports.create = async (data) => User.create(data);
