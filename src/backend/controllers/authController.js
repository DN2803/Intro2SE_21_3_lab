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