const db = require('./models/connect');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const webRoutes = require('./routes/web');
const loginRoute = require('./routes/authRoutes');
const app = express();
const port = 2212;

// Use bodyParser middleware to parse JSON
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

db.connectToDatabase()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
    process.exit(1); // Exit the process if unable to connect to the database
});

app.use(loginRoute);
// // Define your endpoint
// app.post('/login', (req, res) => {
//   // Nhận dữ liệu từ phía Frontend
//   const { email, password } = req.body;

//   // Thực hiện xử lý dữ liệu, ví dụ: in ra console
//   console.log('Received data from Frontend:');
//   console.log('Email:', email);
//   console.log('Password:', password);
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
