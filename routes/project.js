const express = require("express");
const router = express.Router();
var multer = require("multer");
var fs = require("fs");
var path = require("path");

const Work = require("../models/Work");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

router.post("/upload/image", async (req, res) => {
  const img = {
    data: fs.readFileSync(path.join(__dirname + "/uploads/" + "upload.jpg")),
    contentType: "image/jpg",
  };

  try {
    let work = await Work.findOne({ name: "Memory Game" });

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

router.get("/", async (req, res) => {
  try {
    const work = await Work.find({});
    res.json(work);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
