const express = require("express");
const { getDoctorsID_Name } = require("../controllers/doctorController");

const doctorRoutes = express.Router();

//lấy ID và họ tên bác sĩ để display trên trang đặt lịch
doctorRoutes.get("/bookingDocs", getDoctorsID_Name);

module.exports = doctorRoutes;