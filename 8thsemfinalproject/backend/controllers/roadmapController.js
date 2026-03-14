const Roadmap = require("../model/roadmapModel");

// Save a new roadmap
exports.saveRoadmap = async (req, res) => {
  try {
    const { userId, technology, duration, userName, roadmap } = req.body;

    if (!userId || !technology || !duration || !roadmap) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const newRoadmap = new Roadmap({
      userId,
      technology,
      duration,
      userName,
      roadmap,
    });

    await newRoadmap.save();

    res.status(201).json({ message: "Roadmap saved successfully!" });
  } catch (error) {
    console.error("Error saving roadmap:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Get all roadmaps for a specific user
exports.getUserRoadmaps = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }

    const userRoadmaps = await Roadmap.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json(userRoadmaps);
  } catch (error) {
    console.error("Error fetching roadmaps:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
