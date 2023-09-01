const express = require("express");
const path = require("path");
const sequelize = require("./util/database");

const product = require("./model/product");
const bodyParser = require("body-parser");
const userRouter=require("./routes/userRoutes")

const cors = require("cors");
const app = express();

app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(userRouter)

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
