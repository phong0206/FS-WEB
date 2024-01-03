const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

console.log(process.env);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect success"))
  .catch((err) => console.log(err));

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT | 5050;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
