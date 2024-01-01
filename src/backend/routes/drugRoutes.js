const express = require("express");
const { getListDrug, findDrug } = require("../controllers/drugController");

const drugRoutes = express.Router();

//lấy ID và họ tên bác sĩ để display trên trang đặt lịch
drugRoutes.get("/getListDrug", getListDrug);
drugRoutes.get("/findDrug", findDrug);

module.exports = drugRoutes;