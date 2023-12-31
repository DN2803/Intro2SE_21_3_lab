const express = require("express");
const { writeFeedback, getListFeedback } = require("../controllers/feedbackController");

const router = express.Router();

router.post("/writeFeedback", writeFeedback);
router.get("/getListFeedback", getListFeedback);
module.exports = router;