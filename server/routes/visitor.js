const express = require("express");
const router = express.Router();


const { createVisitor } = require("../controller/createVisitor");

router.post("/createVisitor", createVisitor);


module.exports = router;
