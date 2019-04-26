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

// post endpoint
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      res.status(400).json({ error: "please enter name and description" });
    }
    const newProject = await projectDb.insert(req.body);
    res.json(newProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update endpoint
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateProject = await projectDb.update(id, req.body);
    if (updateProject === 0) {
      res.status(400).json({ error: "no id found NULL" });
    } else {
      res.json(updateProject);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete endpoint
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProject = await projectDb.remove(id);
    if (deleteProject === 0) {
      res.status(400).json({ error: "no id found NULL" });
    } else {
      res.json(deleteProject);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
