// backend/models/Task.js
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  priority: { type: String, enum: ["High", "Medium", "Low"], default: "Medium" },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model("Task", TaskSchema);
