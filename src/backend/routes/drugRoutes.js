const express = require("express");
const { getListDrug, findDrug, addDrug, deleteDrug, updateDrug } = require("../controllers/drugController");

const drugRoutes = express.Router();

//lấy ID và họ tên bác sĩ để display trên trang đặt lịch
drugRoutes.get("/getListDrug", getListDrug);
drugRoutes.get("/findDrug", findDrug);
drugRoutes.post("/addDrug", addDrug);
drugRoutes.delete("/deleteDrug/:id", deleteDrug);
drugRoutes.post("/updateDrug", updateDrug);

module.exports = drugRoutes;