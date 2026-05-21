const express = require("express");

const authRoutes = require("./routes/auth.routes");
const creditRoutes = require("../app/routes/credit.routes");

const { auth } = require("./middleware/auth.middleware");
const { errorMiddleware } = require("./middleware/error.middleware");


const app = express();

app.use(express.json());

app.use("/api/v1/credit-requests", auth, creditRoutes);


app.use("/api/v1/auth", authRoutes);

app.use(errorMiddleware);

module.exports = app;