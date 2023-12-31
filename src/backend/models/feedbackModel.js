const db = require("../models/connect");
const sql = require("mssql");

class FeedbackModel {
  constructor({ id, name, phone, description, estimate }) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.description = description;
    this.estimate = estimate;
  }

  static async writeFeedback(feedbackData) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      const result = await request
        .input("nameCustomer", sql.NVarChar, feedbackData.name)
        .input("phoneNumber", sql.NVarChar, feedbackData.phone)
        .input("content", sql.NVarChar, feedbackData.description)
        .input("rating", sql.Int, feedbackData.estimate)
        .output("responseMessage", sql.NVarChar(250))
        .execute("dbo.uspWriteFeedback");

      const responseMessage = result.output.responseMessage;
      return responseMessage;
    } catch (error) {
      console.error("Error when inserting feedback: ", error.message);
      throw new Error("Failed to insert feedback");
    } finally {
      if (pool) {
        await db.closeDatabaseConnection(pool);
      }
    }
  }

  static async getListFeedback() {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      const result = await request
        .execute("dbo.uspGetListFeedback");

      const feedbackList = result.recordset.map((row) => ({
        id: row.ID, 
        name: row.HOTEN, 
        phone: row.SDT, 
        description: row.NOIDUNG, 
        estimate: row.HAILONG,
      }));
      return feedbackList;
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

module.exports = FeedbackModel;