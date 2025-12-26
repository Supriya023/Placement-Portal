const express = require("express");
const {
  applyJob,
  getMyApplications,
  getAllApplications,
} = require("../controllers/applicationController.js");

const router = express.Router();

// Student applies for job
router.post("/apply", applyJob);

// Student sees own applications
router.get("/my", getMyApplications);

// Admin sees all applications
router.get("/all", getAllApplications);

module.exports = router;