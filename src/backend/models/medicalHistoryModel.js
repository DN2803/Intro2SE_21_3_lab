const db = require("./connect");
const sql = require("mssql");

class MedicalHistoryModel {
  constructor({
    MABN,
    NGAYDIEUTRI,
    TENBACSI,
    CHANDOAN,
    TRIEUCHUNG,
    //TRANGTHAI,
    TRANGTHAITHANHTOAN,
    TONGCHIPHI,
  }) {
    (this.MABN = MABN),
      (this.NGAYDIEUTRI = NGAYDIEUTRI),
      this.TENBACSI = TENBACSI,
      (this.CHANDOAN = CHANDOAN),
      this.TRIEUCHUNG = TRIEUCHUNG,
      //(this.TRANGTHAI = TRANGTHAI),
      (this.TRANGTHAITHANHTOAN = TRANGTHAITHANHTOAN),
      (this.TONGCHIPHI = TONGCHIPHI);
  }

  static async getListMedicalHistory(maBN) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      const result = await request
        .input("maBN", sql.Char(15), maBN)
        .execute("dbo.uspGetListMedicalHistory");

      const medicalHistories = result.recordset.map((row) => ({
        MABN: row.MABN,
        NGAYDIEUTRI: row.NGAYDIEUTRI,
        TENBACSI: row.TENBACSI,
        CHANDOAN: row.CHANDOAN,
        TRIEUCHUNG: row.TRIEUCHUNG,
        //TRANGTHAI,
        TRANGTHAITHANHTOAN: row.TRANGTHAITHANHTOAN,
        TONGCHIPHI: row.TONGCHIPHI,
      }));
      return medicalHistories;
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

module.exports = MedicalHistoryModel;
