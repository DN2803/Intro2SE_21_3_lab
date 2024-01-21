const db = require("./connect");
const sql = require("mssql");

class PrescriptionModel {
  constructor({ MABN, NGAYTAO, TENTHUOC, SOLUONG, GIABAN }) {
    (this.MABN = MABN),
      (this.NGAYTAO = NGAYTAO),
      (this.TENTHUOC = TENTHUOC),
      (this.SOLUONG = SOLUONG),
      (this.GIABAN = GIABAN);
  }

  static async getPrescription(maBN, ngayTao) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      const result = await request
        .input("maBN", sql.VarChar(15), maBN)
        .input("ngayTao", sql.VarChar(20), ngayTao)
        .execute("dbo.uspGetPrescription");

      const prescriptionData = result.recordset.map((row) => ({
        MABN: row.MABN,
        NGAYTAO: row.NGAYTAO,
        TENTHUOC: row.TENTHUOC,
        SOLUONG: row.SOLUONG,
        GIABAN: row.GIABAN,
      }));
      return prescriptionData;
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

module.exports = PrescriptionModel;