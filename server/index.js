const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoute");

dotenv.config();

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(cors());
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello We are here");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
