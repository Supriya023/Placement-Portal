import mongoose from "mongoose";
import bcrypt from "bcryptjs";

mongoose.connect(process.env.MONGO_URI);

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: String,
    password: String,
    role: String
  })
);

const createUsers = async () => {
  const adminPass = await bcrypt.hash("admin123", 10);
  const studentPass = await bcrypt.hash("student123", 10);

  await User.create([
    { email: "admin@test.com", password: adminPass, role: "admin" },
    { email: "student@test.com", password: studentPass, role: "student" }
  ]);

  console.log("Users Created");
  process.exit();
};

createUsers();