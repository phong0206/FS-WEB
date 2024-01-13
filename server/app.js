const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDatabase } = require("./config/mongo.config");
const routes = require("./routes/route");
const helmet = require("helmet");
const authLimiter = require("./middllewares/rateLimiter");

dotenv.config();

connectDatabase();

const app = express();

// Ngăn chặn truy cập
app.use(helmet());

// giới hạn lượt request gửi lên
app.use(authLimiter);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
