const Job = require("../models/Job");

// CREATE JOB (Company only)
exports.createJob = async (req, res) => {
  try {
    const { title, description, location, salary } = req.body;

    const job = await Job.create({
      title,
      description,
      location,
      salary,
      company: req.user.id
    });

    res.status(201).json({
      success: true,
      job
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET COMPANY JOBS
exports.getCompanyJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ company: req.user.id });
    res.json({
      success: true,
      jobs
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};