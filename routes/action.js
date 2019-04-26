const express = require("express");

const actionDb = require("../data/helpers/actionModel");

const router = express.Router();

//get endpoint
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const actions = await actionDb.get(id);
    if (actions.length === 0) {
      res.status(400).json({ err: "id does not exist" });
    } else {
      res.json(actions);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// post endpoint
router.post("/", async (req, res) => {
  try {
    const { project_id, description, notes } = req.body;
    if (!project_id || !description || !notes) {
      res
        .status(400)
        .json({ error: "A required field is missing please input it." });
    }
    const newAction = await actionDb.insert(req.body);
    res.json({ newAction });
  } catch (err) {
    res.status(500).json(err);
  }
});

//put endpoint
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateAction = await actionDb.update(id, req.body);
    if (updateAction === 0) {
      res.status(400).json({ error: "no id found NULL" });
    } else {
      res.json(updateAction);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
