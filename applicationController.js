const applyJob = (req, res) => {
  res.json({ message: "Applied successfully" });
};

const getMyApplications = (req, res) => {
  res.json({ message: "My applications" });
};

const getAllApplications = (req, res) => {
  res.json({ message: "All applications" });
};

module.exports = {
  applyJob,
  getMyApplications,
  getAllApplications,
};