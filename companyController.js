const Company = require("../models/Company");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER COMPANY
exports.registerCompany = async (req, res) => {
  try {
    const { name, email, password, companyName } = req.body;

    const exists = await Company.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Company already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const company = await Company.create({
      name,
      email,
      password: hashedPassword,
      companyName
    });

    res.status(201).json({
      success: true,
      message: "Company registered successfully",
      company
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LOGIN COMPANY
exports.loginCompany = async (req, res) => {
  try {
    const { email, password } = req.body;

    const company = await Company.findOne({ email });
    if (!company) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: company._id, role: company.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      token
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};