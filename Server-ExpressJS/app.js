const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const path = require("path");
const cors = require("cors");

const createError = require("http-errors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const $console = require('Console');

const userRouter = require("./routes/user");
const { errorHandler } = require("./middleware/errorHandler");
const { routeNotFound, connectionLost } = require("./middleware/middleware");
const loadDatabase = require("./loaders/db");
loadDatabase().catch((error) => { $console.error(error.message) });

const app = express();
const corsOptions = {
    origin: "http://localhost:8080"
}

app.use("*", cors(corsOptions));
app.use(connectionLost)
app.use(bodyParser.json());
app.use("/user", userRouter);
app.use(routeNotFound);
app.use(errorHandler);

mongoose.connection.on("disconnected", function () {
    $console.error((new Date()).toUTCString(), "\tDisconnected from database.");
});
mongoose.connection.on("connected", function () {
    $console.log((new Date()).toUTCString(), "\tConnected to database.");
});

app.listen(PORT, () => {
    $console.log((new Date()).toUTCString(), `\tApp listening at port ${PORT}.`);
});

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

function cleanup(event) {
    $console.log((new Date()).toUTCString(), "\nBye!");
    mongoose.connection.close();
    process.exit();
}

