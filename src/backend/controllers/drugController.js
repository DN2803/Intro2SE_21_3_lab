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
    console.log(req.nameOrID);
    const drugFound = await DrugModel.findDrug(nameOrID);
    console.log("Got your data: ");
    console.log(drugFound);
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
