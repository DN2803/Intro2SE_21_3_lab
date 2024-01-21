const db = require("../models/connect");
const sql = require("mssql");
class PatientModel {
  constructor({
    MABN,
    HOTEN_BN,
    NGAYSINH,
    GIOITINH,
    SDT_BN,
    EMAIL_BN,
    DIACHI,
    CHONGCHIDINH,
    DIUNG,
    STT,
  }) {
    this.MABN = MABN,
      this.HOTEN = HOTEN_BN,
      this.NGAYSINH = NGAYSINH,
      this.SDT = SDT_BN,
      this.EMAIL = EMAIL_BN,
     this.DIACHI = DIACHI,
      this.CHONGCHIDINH = CHONGCHIDINH,
      this.DIUNG = DIUNG,
      this.STT = STT,
      this.GIOITINH = GIOITINH;
  }
  static async addPatient(patientData) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      console.log("model patient");
      console.log(patientData);
      const result = await request
        .input("MABN", sql.Char(15), patientData.MABN)
        .input("HOTEN_BN", sql.NVarChar(50), patientData.HOTEN)
        .input("NGAYSINH", sql.Date, patientData.NGAYSINH)
        .input("GIOITINH", sql.NVarChar(5), patientData.GIOITINH)
        .input("SDT_BN", sql.Char(10), patientData.SDT)
        .input("EMAIL_BN", sql.VarChar(30), patientData.EMAIL)
        .input("DIACHI", sql.NVarChar(50), patientData.DIACHI)
        .input("CHONGCHIDINH", sql.NVarChar(255), patientData.CHONGCHIDINH)
        .input("DIUNG", sql.NVarChar(255), patientData.DIUNG)
        .input("STT", sql.Int, patientData.STT)
        .output("responseMessage", sql.NVarChar(250))
        .execute("uspAddPatient");
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
  static async getPatientDetailInformation(maBN) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      const result = await request
        .input("maBN", sql.Char(15), maBN)
        .execute("dbo.uspGetPatientDetailInformation");

      const patientInformation = result.recordset.map((row) => ({
        MABN: row.MABN,
        HOTEN_BN: row.HOTEN_BN,
        NGAYSINH: row.NGAYSINH,
        GIOITINH: row.GIOITINH,
        SDT_BN: row.SDT_BN,
        EMAIL_BN: row.EMAIL_BN,
        DIACHI: row.DIACHI,
        CHONGCHIDINH: row.CHONGCHIDINH,
        DIUNG: row.DIUNG,
        STT: row.ID,
      }));
      return patientInformation;
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
module.exports = PatientModel;