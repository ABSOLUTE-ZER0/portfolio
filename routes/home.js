const express = require("express");
const router = express.Router();

const Document = require("../models/Document");

// POST ROUTE

router.post("/", async (req, res) => {
  try {
    const type = req.body.type
    const document = await Document.find({type:type}).sort({name:1});
    res.json(document);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
