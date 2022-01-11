const mongoose = require('mongoose');
const User = require('../models/userModel.js');
const Task = require('../models/taskModel.js');
const ObjectId = mongoose.Types.ObjectId;

module.exports.findUserByCredentials = async function (username, password) {
    const user = await User.findOneByCredentials(username, password);
    return user;
}

module.exports.findTasksOfUser = async function (id) {
    const user = await User.findById(new ObjectId(String(id)));
    if (user == null) {
        return null;
    }
    const taskIds = user.taskIds;
    const tasks = await Task.find()
        .where("_id").in(taskIds)
        .exec();
    return tasks;
}

exports.getAll = async function () {
    const users = await User.find({});
    return users;
};

module.exports.createNewUser = async function (username, password, roles) {
    const user = await User.create({ username, password, roles });
    return user;
}

module.exports.createNewTask = async function (description) {
    const task = await Task.create({ description: description });
    return task;
}

exports.assign = async function (userId, taskIds) {
    let user = await User.findById(userId);
    let tasks = await Task.find({ '_id': { $in: taskIds } });

    User.updateOne(
        {
            _id: userId
        },
        {
            $push:
            {
                taskIds: taskIds
            }
        },
        {
            new: true,
            upsert: true
        }).exec();

    tasks.forEach(task => {
        task.userId = user._id;
        task = task.save();
    });

    return { user, tasks };
};