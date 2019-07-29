const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes");

require("dotenv").config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, () =>
  console.log("connect to db")
);

app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`running on port ${PORT}`));
