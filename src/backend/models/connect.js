<<<<<<< HEAD
const sql = require('mssql');

var config = {  
    server: 'DESKTOP-HN1UKRD',
    authentication: {
        type: 'default',
        options: {
            userName: 'khuevo098',
            password: 'dragon0987'  
        }
    },
    options: {
        encrypt: false,
        database: 'QLPHONGKHAM' 
    }
};  

async function connectToDatabase() {
  try {
    await sql.connect(config);
  } catch (error) {
    console.error('Database Connection Error:', error.message);
    throw error;
  }
}
async function closeDatabaseConnection() {
  try {
    await sql.close();
  } catch (error) {
    console.error('Error closing database connection:', error.message);
  }
}

// Function to execute a simple SELECT query
// async function executeQuery() {
//     try {
//       // Create a SQL Server connection pool
//       const pool = await sql.connect(config);
  
//       // Query string
//       const queryString = 'SELECT * FROM dbo.BACSI';
  
//       // Execute the query
//       const result = await pool.request().query(queryString);
  
//       // Log the result
//       console.log(result.recordset);
  
//     } catch (err) {
//       console.error('Error while executing query:', err);
//     } finally {
//       // Close the SQL Server connection pool
//       sql.close();
//     }
// }
  
// Call the function to execute the query
module.exports = {
  connectToDatabase,
  closeDatabaseConnection,
};
=======
const sql = require("mssql");

const config = {
  server: "DESKTOP-HN1UKRD",
  authentication: {
    type: "default",
    options: {
      userName: "khuevo098",
      password: "dragon0987",
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
>>>>>>> df1b76e81900ad8c9ea567125c44711175c403c3
