//imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 2550;
const sequelize = require("./util/database");

//Handler Function
const app = express();

//Importing Models
const User = require("./Model/User");

//Importing Routes
const HomePage = require("./Routes/HomePage");
//Middleware
app.use(cors());
app.use(express.json());

//route
app.use(HomePage);

sequelize
  .sync({})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Started ${PORT} && our Database is connected`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
