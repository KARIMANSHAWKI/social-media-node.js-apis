const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db");
const mongoose = require("mongoose");

// load routes
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

//load config
dotenv.config({ path: "./config/config.env" });

// init server
const app = express();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);


// run server
const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log("server is running !");
});
