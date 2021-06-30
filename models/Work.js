const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  basic_desc: {
    type: String,
  },
  app_des: {
    type: String,
  },
  url: {
    type: String,
  },
  showcase: {
    type: String,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("Work", userSchema);
