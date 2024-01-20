const DrugModel = require("../models/drugModel");

exports.getListDrug = async (req, res) => {
  try {
    const drugList = await DrugModel.getListDrug();
    return res.status(200).json({ drugList });
  } catch (error) {
    console.error("Error: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.findDrug = async (req, res) => {
  try {
    const nameOrID = req.query.nameOrID;
    //console.log(req.nameOrID);
    const drugFound = await DrugModel.findDrug(nameOrID);
    //console.log("Got your data: ");
    //console.log(drugFound);
    return res.status(200).json({ drugFound });
  } catch (error) {
    console.error("Error: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.addDrug = async (req, res) => {
  try {
    const { name, stock, unit, iPrice, oPrice } = req.body;
    const newDrugData = {
      id: "NULL",
      name: name,
      stock: stock,
      unit: unit,
      iPrice: iPrice,
      oPrice: oPrice,
    };

    //console.log(newDrugData);

    const newDrug = new DrugModel(newDrugData);
    console.log(newDrug);
    const responseFromDB = await DrugModel.addDrug(newDrug);
    //console.log(responseFromDB);

    if (responseFromDB === "successfully") {
      return res.status(201).json({
        success: true,
        message: "Thêm thuốc thành công.",
      });
    } else {
      return res.status(422).json({
        success: false,
        message: `Thêm thuốc thất bại. Lỗi: ${responseFromDB}`,
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteDrug = async (req, res) => {
  const drugID = req.params.id;
  console.log("Received: ", drugID);
  try {
    console.log("Received drug's ID need to delete: ");
    console.log(drugID);

    //Gọi phương thức xoá thuốc
    const responseFromDB = await DrugModel.deleteDrug(drugID);
    if (responseFromDB.localeCompare("successfully")) {
      return res.json({
        success: true,
        message: "Xoá thành công!",
      });
    } else {
      return res.json({
        success: false,
        message: `Đã có lỗi xảy ra! Lỗi: ${responseFromDB}`,
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateDrug = async (req, res) => {
  try {
    const { id, name, stock, unit, iPrice, oPrice } = req.body;

    const updatedData = {
      id: id,
      name: name,
      stock: stock,
      unit: unit,
      iPrice: iPrice,
      oPrice: oPrice,
    };

    console.log("Received updated data of drug: ");
    console.log(updatedData);
    const responseFromDB = await DrugModel.updateDrug(updatedData);

    if (responseFromDB === "successfully") {
      return res.status(201).json({
        success: true,
        message: "Cập nhật thông tin thuốc thành công!",
      });
    } else {
      return res.json({
        success: false,
        message: `Cập nhật thất bại! Lỗi: ${responseFromDB}`,
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
