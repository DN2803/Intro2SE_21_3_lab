const db = require("./connect");
const sql = require("mssql");


class EmployeeModel {
  constructor({ ID, name, email, phone, degree, wage }) {
    this.ID = ID;
    this.name = name;
    this.email = email;
    (this.phone = phone), (this.degree = degree);
    this.wage = wage;
  }
  static async getEmployee() {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      const result = await request.execute("dbo.uspGetEmployee");
      // Transform the result into a doctors list
      const employeeList = result.recordset.map((row) => ({
        id: row.MABACSI,
        name: row.HOTEN_BS,
        email: row.EMAIL_BS,
        phone: row.SDT_BS,
        degree: row.HOCHAM,
        wage: row.LUONG,
      }));
      return employeeList;
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    } finally {
      if (pool) {
        await db.closeDatabaseConnection(pool);
      }
    }
  }

  static async addEmployee(employeeData) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      // Thực hiện truy vấn INSERT để tạo lịch hẹn
      const result = await request
        .input("maNV", sql.Char(10), employeeData.ID)
        .input("degree", sql.NVarChar(30), employeeData.degree)
        .input("email", sql.NVarChar(30), employeeData.email)
        .input("name", sql.VarChar(50), employeeData.name)
        .input("phone", sql.Char(10), employeeData.phone)
        .input("wage", sql.VarChar(30), employeeData.wage)
        .output("responseMessage", sql.NVarChar(250))
        .execute("dbo.uspAddEmployee");

      const responseMessage = result.output.responseMessage;

      return responseMessage;
    } catch (error) {
      console.error("Error adding new employee:", error.message);
      throw new Error("Failed to add new employee");
    } finally {
      if (pool) {
        await db.closeDatabaseConnection(pool);
      }
    }
  }
}

module.exports = EmployeeModel;
