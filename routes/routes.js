const express = require("express");
const { getRandomNumber } = require("../controllers/controller");

const router = express.Router();

router.get("/random", getRandomNumber);

module.exports = router;
