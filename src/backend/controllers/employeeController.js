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
    const duplicateFault = "Violation of UNIQUE KEY constraint 'UQ__BACSI__DE78A40D736CE37A'. Cannot insert duplicate key in obj"
    console.log(responseFromDB);
    if (responseFromDB === "Success") {
      return res.status(201).json({
        success: true,
        message: 'Thêm nhân viên thành công.',
      });
    } 
    else if (responseFromDB === "Invalid information") {
      return res.status(201).json({
        success: false,
        message: 'Thiếu thông tin.',
      });
    } 
    else if (responseFromDB.includes(duplicateFault))
    {
      return res.status(201).json({
        success: false,
        message: 'Trùng số điện thoại.',
      });
    } else{
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


exports.updateEmployee= async (req, res) => {
  try {
    const {
      degree,
      email,
      id,
      name,
      phone,
      wage,
    } = req.body;
    const updatedData = {
      ID: id,
      name:name,
      email: email,
      phone: phone,
      degree: degree,
      wage: wage,
    };
    console.log("Received appointment data from Frontend(update):");
    console.log("Name:", updatedData.name);
    console.log("Phone Number:", updatedData.phone);
    console.log("Email:", updatedData.email);
    console.log("ID:", updatedData.ID);
    console.log("Degree:", updatedData.degree);
    console.log("Wage:", updatedData.wage);
    const updatedEmployee = new EmployeeModel(updatedData);
    // Gọi phương thức thêm nhân viên từ EmployeeModel
    const responseFromDB = await EmployeeModel.updateEmployee(updatedEmployee);
    console.log(responseFromDB);
    if (responseFromDB === "Update thành công") {
      return res.status(201).json({
        success: true,
        message: 'Cập nhật nhân viên thành công.',
      });
    } 
    else{
      return res.json({
        success: false,
        message: `Cập nhật nhân viên thất bại. Lỗi: ${responseFromDB}`,
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.deleteEmployee= async (req, res) => {
  const idEmployee = req.params.id;
  try {
    console.log("Received appointment data from Frontend(update):");
    console.log(idEmployee);
    
    // Gọi phương thức thêm nhân viên từ EmployeeModel
    const responseFromDB = await EmployeeModel.deleteEmployee(idEmployee);
    if (responseFromDB === "Xóa thành công") {
      return res.json({
        success: true,
        message: 'Xóa nhân viên thành công.',
      });
    } 
    else{
      return res.json({
        success: false,
        message: `Xóa nhân viên thất bại. Lỗi: ${responseFromDB}`,
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};