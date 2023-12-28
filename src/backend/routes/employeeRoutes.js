const express = require("express");
const { getEmployees, addNewEmployee } = require("../controllers/employeeController");

const router = express.Router();

router.get("/getEmployees", getEmployees);
router.post("/addNewEmployee", addNewEmployee);

module.exports = router;
