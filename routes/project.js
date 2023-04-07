const express = require("express");
const router = express.Router();
var fs = require("fs");
var path = require("path");

const Work = require("../models/Work");

router.post("/upload/image", async (req, res) => {
  const img = {
    data: fs.readFileSync(path.join(__dirname + "/uploads/" + "upload.png")),
    contentType: "image/png",
  };

  try {
    let work = await Work.findOne({ name: "Carnage" });

    if (work) {
      work.img = img;
      work.save();

      res.json(work);
    } else {
      res.json("fail");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


// GET ROUTE

router.post("/", async (req, res) => {
  try {
    const type = req.body.type
    const work = await Work.find({showcase:type}).sort({order:1});
    res.json(work);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const work = await Work.find({}).sort({name:1});
    res.json(work);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
