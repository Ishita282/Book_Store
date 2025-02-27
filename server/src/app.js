const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const { errorHandler } = require("./middleware/errorHandler");
const routes = require("./routes/index");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.use("/", routes);

app.get("/favicon.ico", (req, res) => res.status(204).end());

app.use((req, res, next) => {
  res.status(404);
  next(new Error(`Not Found: ${req.originalUrl}`));
});

app.use(errorHandler);

module.exports = app;
