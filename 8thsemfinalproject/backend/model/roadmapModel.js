const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  id: String,
  title: String,
  url: String,
  type: String,
  source: String,
});

const stepSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  estimatedTime: String,
  completed: Boolean,
  resources: [resourceSchema],
});

const roadmapSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  technology: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
  },
  roadmap: [stepSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Roadmap", roadmapSchema);
