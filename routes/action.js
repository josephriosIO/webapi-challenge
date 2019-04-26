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

module.exports = router;
