const express = require("express");
const router = express.Router();
const {
  saveRoadmap,
  getUserRoadmaps,
} = require("../controllers/roadmapController");

// Save a new roadmap
router.post("/saveRoadmap", saveRoadmap);

// Get all roadmaps for a specific user
router.get("/user/:userId", getUserRoadmaps);

module.exports = router;
