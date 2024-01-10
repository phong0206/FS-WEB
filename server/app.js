const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDatabase } = require("./config/mongo.config");
const routes = require("./routes/route");

dotenv.config();

connectDatabase();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
