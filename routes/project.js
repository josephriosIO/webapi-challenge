const express = require("express");

const projectDb = require("../data/helpers/projectModel");

const router = express.Router();

//get endpoint
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const project = await projectDb.get(id);
    if (project.length === 0) {
      res.status(400).json({ error: "id doesnt exist" });
    } else {
      res.json(project);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
