const db = require("../models/connect");

// Function to get doctors' IDs and names
const getDoctorsID_Name = async () => {
  let pool;
  try {
    pool = await db.connectToDatabase();
    const request = pool.request();
    const result = await request.execute("dbo.uspGetDoctorsID_Name");

    // Transform the result into a doctors list
    const doctorsList = result.recordset.map((row) => ({
      hashtag: row.hashtag,
      name: row.name,
    }));

    return doctorsList;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  } finally {
    if (pool) {
      await db.closeDatabaseConnection(pool);
    }
  }
};

module.exports = {
  getDoctorsID_Name,
};