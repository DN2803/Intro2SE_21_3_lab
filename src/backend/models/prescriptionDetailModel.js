const db = require("./connect");
const sql = require("mssql");
class PrescriptionDetailModel {
  constructor({
    MABN,
    NGAYTAO,
    MATHUOC,
    SOLUONG,
  }) {
    this.patientID = MABN,
    this.dateCase = NGAYTAO,
    this.medicineName = MATHUOC,
    this.quantity = SOLUONG
  }
  static async addMedicineToPreDetail(prescriptionDetail) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      const result = await request
        .input("mabn", sql.Char(15), prescriptionDetail.patientID)
        .input("ngaytao", sql.Char(14), prescriptionDetail.dateCase)
        .input("tenthuoc", sql.NVarChar(15), prescriptionDetail.medicineName)
        .input("soluong", sql.Int, prescriptionDetail.quantity)
        .output("responseMessage", sql.NVarChar(250))
        .execute("uspAddMedicineToPreDetail");
        const responseMessage = result.output.responseMessage;
      return responseMessage;
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    } finally {
      if (pool) {
        await db.closeDatabaseConnection(pool);
      }
    }
  }
}
module.exports = PrescriptionDetailModel;