const express = require("express");
const { userController } = require("../controllers/controller");
const { validationRegister } = require("../middllewares/validationUser");
const router = express.Router();

router.post("/register", validationRegister, userController.register);

module.exports = router;
