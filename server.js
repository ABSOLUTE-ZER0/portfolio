const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
var cors = require("cors");
const app = express();

// DB CONNECTION
connectDB();

// MIDDLEWARE INIT

require('dotenv').config()
app.use(cors());

app.use(
  express.json({
    extented: false,
  })
);

// DEFINE ROUTES

app.use("/api/home", require("./routes/home"));
app.use("/api/project", require("./routes/project"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/about", require("./routes/about"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
