const mongoose = require("mongoose");
const DATABASE_CONNECTION = process.env.DATABASE_CONNECTION ;
const DB_CONNECTION_OPTIONS = JSON.parse(process.env.DATABASE_CONNECTION_OPTIONS);

module.exports = async function() {
    await mongoose.connect(DATABASE_CONNECTION, DB_CONNECTION_OPTIONS);
}
