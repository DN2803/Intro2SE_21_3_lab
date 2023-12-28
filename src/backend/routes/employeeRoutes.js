const express = require("express");
const { getEmployees, addNewEmployee, updateEmployee ,deleteEmployee} = require("../controllers/employeeController");

const router = express.Router();

router.get("/getEmployees", getEmployees);
router.post("/addNewEmployee", addNewEmployee);
router.post("/updateEmployee",updateEmployee);
router.delete("/deleteEmployee/:id", deleteEmployee);
module.exports = router;
