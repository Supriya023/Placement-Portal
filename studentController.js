const getStudentProfile = (req, res) => {
  res.status(200).json({
    message: "Student profile accessed",
    user: req.user
  });
};

module.exports = {
  getStudentProfile
};