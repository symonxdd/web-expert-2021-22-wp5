const createError = require("http-errors");
const mongoose = require("mongoose");
let { MongoServerError } = require("mongodb");

function errorHandler(err, req, res, next) {
    let status = err.status || 500;
    let message = err.message || "Something went wrong"
    if (mongoose.connection.readyState == 0) {
        status = 500;
        message = "Cannot connect to database";
    }
    else if (err instanceof mongoose.Error.ValidationError) {
        status = 400;
        message = `Validation failed: ${err.message}`;
    }
    // else if (err instanceof mongoose.Error.DocumentNotFoundError) {
    //     status = 400;
    //     message = `${err.message}`;
    // }
    else if (err instanceof TypeError) {
        status = 400;
        message = `${"Wrong Credentials"}`;
        message = `${err.message}`;
    }
    else if (err instanceof MongoServerError) {
        status = 409;
        const duplicateUsername = err.message.substring(err.message.indexOf("\"") + 1, err.message.indexOf("\"", err.message.indexOf("\"") + 1));
        message = `Duplicate Key: User <span class="duplicate-key">${duplicateUsername}</span>  already exists.`;
    }
    res.status(status).json({ "error": message });
};

module.exports = { errorHandler };
