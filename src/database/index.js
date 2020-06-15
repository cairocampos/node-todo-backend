const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Task = require("../models/task");
require("dotenv").config({
    path: "./.env"
})
const connection = new Sequelize(dbConfig[process.env.NODE_ENV]);
Task.init(connection);

module.exports = connection;