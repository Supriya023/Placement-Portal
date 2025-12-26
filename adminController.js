const User = require("../models/User");
const Job = require("../models/Job");
const Application = require("../models/Application");

exports.getAdminStats = async (req, res) => {
  try {
    const students = await User.countDocuments({ role: "student" });
    const jobs = await Job.countDocuments();
    const applications = await Application.countDocuments();

    res.json({ students, jobs, applications });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};