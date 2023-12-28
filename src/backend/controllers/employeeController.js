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

exports.addNewEmployee= async (req, res) => {
  try {
    const {
      degree,
      email,
      id,
      name,
      phone,
      wage,
    } = req.body;
    const newEmployeeData = {
      ID:id,
      name:name,
      email: email,
      phone: phone,
      degree: degree,
      wage: wage,
    };
    console.log("Received appointment data from Frontend:");
    console.log("Name:", newEmployeeData.name);
    console.log("Phone Number:", newEmployeeData.phone);
    console.log("Email:", newEmployeeData.email);
    console.log("ID:", newEmployeeData.ID);
    console.log("Degree:", newEmployeeData.degree);
    console.log("Wage:", newEmployeeData.wage);
    const newEmployee = new EmployeeModel(newEmployeeData);
    console.log(newEmployeeData);
    // Gọi phương thức thêm nhân viên từ EmployeeModel
    const responseFromDB = await EmployeeModel.addEmployee(newEmployee);
    console.log(responseFromDB);
    if (responseFromDB === "Success") {
      return res.status(201).json({
        success: true,
        message: 'Thêm nhân viên thành công.',
      });
    } 
    else{
      return res.status(422).json({
        success: false,
        message: `Thêm nhân viên thất bại. Lỗi: ${responseFromDB}`,
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};