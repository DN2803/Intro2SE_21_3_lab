const PrescriptionDetailModel = require("../models/prescriptionDetailModel")

exports.addMedicineToPreDetail = async (req, res) => {
    try {
      const {
        name,
        patientID,
        quantity,
        dateCase
      } = req.body;
      const preDetail = {
       patientID : patientID,
        dateCase : dateCase,
        medicineName: name || 'Trống',
        quantity: quantity || 0, 
      };
      
      console.log("controller");
  
      console.log(preDetail);
      const responseFromDB = await PrescriptionDetailModel.addMedicineToPreDetail(preDetail);
      if (responseFromDB === 'Adding'){
        return res.json({
            message: `${preDetail.medicineName}: Thêm thuốc vào bệnh sử thành công.`,
          });
      }
      else if (responseFromDB === 'Updating'){
        return res.json({
            message: `${preDetail.medicineName}: Cập nhật số lượng thuốc thành công.`,
          });
      }
      else if (responseFromDB === 'Not Enough'){
        return res.json({
            message: `${preDetail.medicineName}: Số lượng thuốc cần kê không có đủ trong kho.`,
          });
      }
      else if (responseFromDB === 'Invalid'){
        return res.json({
            message: `${preDetail.medicineName}: Tên thuốc vừa nhập không tồn tại trong kho. Vui lòng kiểm tra lại.`,
          });
      }
      else if (responseFromDB === 'Wrong'){
        return res.json({
            message: `${preDetail.medicineName}: Số lượng không hợp lệ.`,
          });
      }
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };