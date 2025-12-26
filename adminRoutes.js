const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/dashboard", protect, authorize("admin"), (req, res) => {
  res.json({
    message: "Welcome Admin Dashboard",
    user: req.user
  });
});

module.exports = router;