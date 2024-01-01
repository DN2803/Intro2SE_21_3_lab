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
