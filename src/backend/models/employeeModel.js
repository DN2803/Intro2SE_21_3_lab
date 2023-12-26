const db = require("./connect");

class EmployeeModel {
  constructor({ ID, name, email, degree, salary }) {
    this.ID = ID;
    this.name = name;
    this.email = email;
    this.degree = degree;
    this.salary = salary;
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
        wage: row.LUONG
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
    
  }

}

module.exports = EmployeeModel;
