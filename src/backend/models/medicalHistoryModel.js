const db = require("./connect");
const sql = require("mssql");

class MedicalHistoryModel {
  constructor({ patientID, dateCase, doctorName, patientSymptom, patientDiagnose }) {
    this.patientID = patientID;
    this.dateCase = dateCase;
    this.doctorName = doctorName;
    this.patientSymptom = patientSymptom;
    this.patientDiagnose = patientDiagnose;
  }
  static async addOrUpdateMedicalHistory(medicalHistory) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      const result = await request
        .input("mabn", sql.Char(15), medicalHistory.patientID)
        .input("ngaydieutri", sql.Char(14), medicalHistory.dateCase)
        .input("mabacsi", sql.Char(10), medicalHistory.doctorID)
        .input("trieuchung", sql.NVarChar(50), medicalHistory.patientSymptom)
        .input("chandoan", sql.NVarChar(50), medicalHistory.patientDiagnose)
        .output("responseMessage", sql.NVarChar(250))
        .execute("dbo.uspAddOrUpdateMedicalHistory");
      console.log(medicalHistory.dateCase);
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

  static async getMedicalHistory(MABN, NGAYDIEUTRI, USERNAME) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      const result = await request
        .input("mabn", sql.Char(15), MABN)
        .input("ngaydieutri", sql.Char(14), NGAYDIEUTRI)
        .input("doctor_username", sql.Char(10), USERNAME)
        .execute("dbo.uspGetMedicalHistory");
      console.log("model");
      console.log(MABN, NGAYDIEUTRI, USERNAME);
      
      const medicalHistoryInformation = result.recordset.map((row) => ({
        doctorName: row.HOTEN_BS,
        patientSymptom: row.TRIEUCHUNG,
        patientDiagnose: row.CHANDOAN
      }));
      return medicalHistoryInformation;
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
