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
}

module.exports = DrugModel;
