const express = require("express");

const app = express();

// import routes
const authRoutes = require("./routes/auth");

// middleware
app.use("/api", authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
