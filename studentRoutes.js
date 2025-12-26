const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");

router.get(
  "/dashboard",
  protect,
  authorize("student"),
  (req, res) => {
    res.json({
      success: true,
      message: "Student dashboard accessed",
      user: req.user
    });
  }
);

module.exports = router;