const express = require("express");

const routes = require("../app/routes/credit.routes");

const { errorMiddleware } = require("./middleware/error.middleware");

const app = express();

app.use(express.json());

app.use("/api/v1/credit-requests", routes);

app.use(errorMiddleware);

module.exports = app;