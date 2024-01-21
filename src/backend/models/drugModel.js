const db = require("../models/connect");
const sql = require("mssql");

class DrugModel {
  constructor({ id, name, stock, unit, iPrice, oPrice }) {
    this.id = id;
    this.name = name;
    this.stock = stock;
    this.unit = unit;
    this.iPrice = iPrice;
    this.oPrice = oPrice;
  }

  static async getListDrug() {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      const result = await request.execute("dbo.uspGetListDrug");

      const drugList = result.recordset.map((row) => ({
        id: row.MATHUOC,
        name: row.TENTHUOC,
        unit: row.DONVITINH,
        stock: row.SOLUONGTON,
        iPrice: row.GIANHAPKHO,
        oPrice: row.GIABAN,
      }));
      return drugList;
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    } finally {
      if (pool) {
        await db.closeDatabaseConnection(pool);
      }
    }
  }

  static async findDrug(nameOrID) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      const result = await request
        .input("nameOrID", sql.NVarChar, nameOrID)
        .execute("dbo.uspFindDrug");

      const drugFound = result.recordset.map((row) => ({
        id: row.MATHUOC,
        name: row.TENTHUOC,
        unit: row.DONVITINH,
        stock: row.SOLUONGTON,
        iPrice: row.GIANHAPKHO,
        oPrice: row.GIABAN,
      }));
      return drugFound;
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    } finally {
      if (pool) {
        await db.closeDatabaseConnection(pool);
      }
    }
  }

  static async addDrug(drugData) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();

      const result = await request
        .input("id", sql.Char(4), drugData.id)
        .input("name", sql.NVarChar(15), drugData.name)
        .input("unit", sql.NVarChar(10), drugData.unit)
        .input("stock", sql.Int, drugData.stock)
        .input("iPrice", sql.Money, drugData.iPrice)
        .input("oPrice", sql.Money, drugData.oPrice)
        .output("responseMessage", sql.NVarChar(100))
        .execute("dbo.uspAddDrug");

      const responseMessage = result.output.responseMessage;
      return responseMessage;
    } catch (error) {
      console.error("Error adding new drug:", error.message);
      throw new Error("Failed to add new drug");
    } finally {
      if (pool) {
        await db.closeDatabaseConnection(pool);
      }
    }
  }

  static async deleteDrug(drugID) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();
      const result = await request
      .input("maThuoc", sql.Char(4), drugID)
      .output("ResponseMessage", sql.NVarChar(100))
      .execute("dbo.uspDeleteDrug");

      const responseMessage = result.output.ResponseMessage;
      return responseMessage;
    } catch (error) {
      console.error("Error while deleting the drug: ", error.message);
      throw new Error("Failed to delete the drug");
    } finally {
      if (pool) {
        await db.closeDatabaseConnection(pool);
      }
    }
  }

  static async updateDrug(updatedData) {
    let pool;
    try {
      pool = await db.connectToDatabase();
      const request = pool.request();

      const result = await request
        .input("maThuoc", sql.Char(4), updatedData.id)
        .input("tenThuoc", sql.NVarChar(15), updatedData.name)
        .input("donViTinh", sql.NVarChar(10), updatedData.unit)
        .input("soLuong", sql.Int, updatedData.stock)
        .input("giaNhap", sql.Money, updatedData.iPrice)
        .input("giaBan", sql.Money, updatedData.oPrice)
        .output("responseMessage", sql.NVarChar(250))
        .execute("dbo.uspUpdateDrug");

      const responseMessage = result.output.responseMessage;

      return responseMessage;
    } catch (error) {
      console.error("Error updating the drug:", error.message);
      throw new Error("Failed to update the drug");
    } finally {
      if (pool) {
        await db.closeDatabaseConnection(pool);
      }
    }
  }
}

module.exports = DrugModel;
