require("dotenv").config();

const applicationRoutes = require("./src/routes/applicationRoutes");
const jobRoutes = require ("./src/routes/jobRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const companyRoutes = require("./src/routes/companyRoutes");
const studentRoutes = require("./src/routes/studentRoutes");
const authRoutes = require("./src/routes/authRoutes");
const connectDB = require("./src/config/db");
const express = require("express");
const cors = require("cors");
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Placement Portal Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});