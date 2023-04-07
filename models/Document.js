const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img_path: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Document", userSchema);
