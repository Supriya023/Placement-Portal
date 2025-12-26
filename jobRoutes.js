const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");
const {
  createJob,
  getCompanyJobs
} = require("../controllers/jobController");

// company only
router.post(
  "/",
  protect,
  authorize("company"),
  createJob
);

router.get(
  "/company",
  protect,
  authorize("company"),
  getCompanyJobs
);

module.exports = router;