const express = require("express");
const { getEmployees } = require("../controllers/employeeController");

const employeeRoutes = express.Router();


employeeRoutes.get("/getEmployees", getEmployees);

module.exports = employeeRoutes;
