const express = require("express");
const router = express.Router();
const controller = require("../Controller/HomePage");

router.use("/", controller.HomePage);

module.exports = router;
