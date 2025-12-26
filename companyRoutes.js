const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/dashboard", protect, authorize("company"), (req, res) => {
  res.json({
    message: "Welcome Company Dashboard",
    user: req.user
  });
});

module.exports = router;