const mongoose = require("mongoose");
const Task = require("../models/taskModel.js");
const User = require("../models/userModel.js");
const ObjectId = mongoose.Types.ObjectId;

exports.update = async function (taskId, { completed, description, userId }) {
    let task = await Task.findById(new ObjectId(String(taskId)));

    if (typeof completed != "undefined") {
        task.completed = completed;
    }
    if (typeof description != "undefined") {
        task.description = description;
    }
    if (typeof userId != "undefined") {
        throw new Error("Not yet implemented");
    }

    await task.save();
    return task;
};

exports.getAll = async function () {
    const tasks = await Task.find({});
    return tasks;
};

exports.getUnassignedTasks = async function () {
    const tasks = await Task.find({ 'userId': { $exists: false, $eq: null } });
    return tasks;
};