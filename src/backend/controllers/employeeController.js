const EmployeeModel = require("../models/employeeModel")

exports.getEmployees = async (req, res) => {
    try {
      const employeeList = await EmployeeModel.getEmployee();
      console.log(employeeList);
      return res.status(200).json({ employeeList });
    } catch (error) {
      console.error('Error:', error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };