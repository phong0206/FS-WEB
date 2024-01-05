const express = require("express");
const { userController } = require("../controllers/controller");
const router = express.Router();

router.post("/register", userController.register);

module.exports = router;
