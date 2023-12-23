<<<<<<< HEAD
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Received data from Frontend:');
    console.log('Email:', email);
    console.log('Password:', password);

    // Thực hiện xử lý đăng nhập trực tiếp từ model
    //const user = await userModel.findOne({ email, password });

    //if (user) {
   //   res.json({ success: true, message: 'Login successful', userData: user });
    //} else {
    //  res.json({ success: false, message: 'Invalid credentials' });
    //}
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
=======
const db = require("../models/connect");
const sql = require("mssql");

exports.login = async (req, res) => {
  let pool;

  try {
    const { text, password } = req.body;
    console.log("Received data from Frontend:");
    console.log("Username:", text);
    console.log("Password:", password);
    
    // Kết nối đến cơ sở dữ liệu
    pool = await db.connectToDatabase();

    // Kiểm tra xem pool có được khởi tạo không
    if (!pool) {
      console.error("Failed to establish a database connection");
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Thực hiện truy vấn SELECT để kiểm tra tài khoản
    const request = pool.request();
    request.input("pLoginName", sql.VarChar(254), text);
    request.input("pPassword", sql.VarChar(50), password);
    request.output("responseMessage", sql.NVarChar(250));

    const result = await request.execute("dbo.uspLogin");
    const responseMessage = result.output.responseMessage;

    // Kiểm tra xem có kết quả nào không
    if (responseMessage == "User successfully logged in") {
      // Tài khoản hợp lệ, có thể thực hiện các hành động khác ở đây
      console.log("Login successful!");
      return res
        .status(200)
        .json({ message: "Login successful", loginName: text });
    } else {
      // Tài khoản không hợp lệ
      console.log("Invalid login credentials");
      return res.status(401).json({ error: "Invalid login credentials" });
    }
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Đảm bảo rằng kết nối sẽ được đóng ngay cả khi có lỗi xảy ra
    if (pool) {
      await db.closeDatabaseConnection(pool);
    }
  }
};
>>>>>>> df1b76e81900ad8c9ea567125c44711175c403c3
