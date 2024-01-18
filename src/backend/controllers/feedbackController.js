const FeedbackModel = require("../models/feedbackModel");

exports.writeFeedback = async (req, res) => {
  try {
    const { name, phone, description, estimate } = req.body;
    const feedbackData = {
      name: name,
      phone: phone,
      description: description,
      estimate: estimate,
    };

    console.log("Received feedback data from Frontend: ");
    console.log(feedbackData);

    const newFeedback = new FeedbackModel(feedbackData);
    const responseFromDB = await FeedbackModel.writeFeedback(feedbackData);

    console.log(responseFromDB);
    if (responseFromDB === "Write successfully") {
      return res.status(201).json({
        success: true,
        message: "Gửi đánh giá thành công!",
      });
    }
    else if (responseFromDB === "Invalid information"){
      return res.status(201).json({
        success: false,
        message: "Thiếu thông tin",
      });
    } else {
        // status 500 ?!?
      console.error("Failed to write feedback data to the database.");
      return res.status(500).json({
        success: false,
        message: "Không thể gửi đánh giá. Vui lòng thử lại sau.",
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getListFeedback = async (req, res) => {
  try {
    const feedbackList = await FeedbackModel.getListFeedback();
    console.log(feedbackList);
    return res.status(200).json({feedbackList});
  } catch (error) {
    console.error("Error: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}