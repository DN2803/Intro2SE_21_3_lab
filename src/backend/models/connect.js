const sql = require("mssql");

const config = {
  server: "localhost",
  authentication: {
    type: "default",
    options: {
      userName: "sa",
      password: "dungle1012",
    },
  },
  options: {
    encrypt: false,
    database: "QLPHONGKHAM",
  },
};

async function connectToDatabase() {
  try {
    const pool = await sql.connect(config);
    console.log("Connected to the database");
    return pool;
  } catch (error) {
    console.error("Database Connection Error:", error.message);
    throw error; // Rethrow the error to indicate connection failure
  }
}

async function closeDatabaseConnection(pool) {
  try {
    await pool.close();
    console.log("Connection closed");
  } catch (error) {
    console.error("Error closing database connection:", error.message);
  }
}
module.exports = {
  connectToDatabase,
  closeDatabaseConnection,
};
